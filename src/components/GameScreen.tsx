import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

interface GameScreenProps {
  onGameEnd: (score: number, won: boolean) => void;
  onBackToWish: () => void;
}

interface Laddu {
  id: number;
  x: number;
  y: number;
  speed: number;
}

const GameScreen = ({ onGameEnd, onBackToWish }: GameScreenProps) => {
  const [score, setScore] = useState(0);
  const [basketPosition, setBasketPosition] = useState(50);
  const [laddus, setLaddus] = useState<Laddu[]>([]);
  const [gameActive, setGameActive] = useState(true);
  const [gameStarted, setGameStarted] = useState(false);

  const BASKET_WIDTH = 80;
  const LADDU_SIZE = 40;
  const GAME_WIDTH = 800;
  const GAME_HEIGHT = 600;
  const TARGET_SCORE = 10;

  const spawnLaddu = useCallback(() => {
    if (!gameActive) return;
    
    const newLaddu: Laddu = {
      id: Date.now(),
      x: Math.random() * (GAME_WIDTH - LADDU_SIZE),
      y: -LADDU_SIZE,
      speed: 2 + Math.random() * 3,
    };
    setLaddus(prev => [...prev, newLaddu]);
  }, [gameActive]);

  const moveBasket = useCallback((direction: 'left' | 'right') => {
    setBasketPosition(prev => {
      const newPos = direction === 'left' ? prev - 5 : prev + 5;
      return Math.max(0, Math.min(100 - (BASKET_WIDTH / GAME_WIDTH) * 100, newPos));
    });
  }, []);

  const handleKeyPress = useCallback((e: KeyboardEvent) => {
    if (!gameActive) return;
    
    if (e.key === 'ArrowLeft') {
      moveBasket('left');
    } else if (e.key === 'ArrowRight') {
      moveBasket('right');
    }
  }, [gameActive, moveBasket]);

  const handleTouchStart = useCallback((e: TouchEvent) => {
    if (!gameActive) return;
    
    const touch = e.touches[0];
    const gameElement = document.getElementById('game-area');
    if (!gameElement) return;
    
    const rect = gameElement.getBoundingClientRect();
    const touchX = touch.clientX - rect.left;
    const gameWidth = rect.width;
    const touchPercent = (touchX / gameWidth) * 100;
    
    if (touchPercent < basketPosition + (BASKET_WIDTH / GAME_WIDTH) * 50) {
      moveBasket('left');
    } else {
      moveBasket('right');
    }
  }, [gameActive, basketPosition, moveBasket]);

  useEffect(() => {
    if (!gameStarted) return;

    document.addEventListener('keydown', handleKeyPress);
    document.addEventListener('touchstart', handleTouchStart);
    
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
      document.removeEventListener('touchstart', handleTouchStart);
    };
  }, [handleKeyPress, handleTouchStart, gameStarted]);

  useEffect(() => {
    if (!gameActive || !gameStarted) return;

    const interval = setInterval(spawnLaddu, 1500);
    return () => clearInterval(interval);
  }, [gameActive, spawnLaddu, gameStarted]);

  useEffect(() => {
    if (!gameActive || !gameStarted) return;

    const gameLoop = setInterval(() => {
      setLaddus(prev => {
        const updated = prev.map(laddu => ({
          ...laddu,
          y: laddu.y + laddu.speed,
        }));

        // Check collisions with basket
        const basketX = (basketPosition / 100) * GAME_WIDTH;
        const basketY = GAME_HEIGHT - 80;

        const collisions = updated.filter(laddu => 
          laddu.y + LADDU_SIZE >= basketY &&
          laddu.y <= basketY + 40 &&
          laddu.x + LADDU_SIZE >= basketX &&
          laddu.x <= basketX + BASKET_WIDTH
        );

        if (collisions.length > 0) {
          setScore(prevScore => {
            const newScore = prevScore + collisions.length;
            if (newScore >= TARGET_SCORE) {
              setGameActive(false);
              setTimeout(() => onGameEnd(newScore, true), 500);
            }
            return newScore;
          });
        }

        // Check for laddus that hit the ground
        const hitGround = updated.filter(laddu => laddu.y > GAME_HEIGHT);
        if (hitGround.length > 0) {
          setGameActive(false);
          setTimeout(() => onGameEnd(score, false), 500);
        }

        // Remove caught laddus and those that hit the ground
        return updated.filter(laddu => 
          laddu.y <= GAME_HEIGHT &&
          !(laddu.y + LADDU_SIZE >= basketY &&
            laddu.y <= basketY + 40 &&
            laddu.x + LADDU_SIZE >= basketX &&
            laddu.x <= basketX + BASKET_WIDTH)
        );
      });
    }, 16);

    return () => clearInterval(gameLoop);
  }, [gameActive, basketPosition, score, onGameEnd, gameStarted]);

  const startGame = () => {
    setGameStarted(true);
    setGameActive(true);
    setScore(0);
    setLaddus([]);
    setBasketPosition(50);
  };

  if (!gameStarted) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center card-neon max-w-md"
        >
          <h1 className="text-3xl font-bold text-neon mb-4 font-orbitron text-glow">
            Catch the Laddus 🟠
          </h1>
          <div className="text-6xl mb-6 animate-bounce">🐘</div>
          <p className="text-foreground mb-6 leading-relaxed">
            Help Ganesha catch the falling laddus! Use arrow keys or tap left/right on mobile.
            Catch {TARGET_SCORE} laddus to win a special blessing!
          </p>
          <div className="space-y-4">
            <Button onClick={startGame} className="btn-neon w-full">
              Start Game 🎮
            </Button>
            <Button 
              onClick={onBackToWish} 
              variant="ghost" 
              className="text-neon-purple hover:text-neon-orange"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Wishes
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 relative z-10">
      {/* Score */}
      <div className="fixed top-4 right-4 z-20">
        <div className="bg-card/80 backdrop-blur-sm rounded-2xl px-6 py-3 border border-neon-orange/30 neon-border">
          <p className="text-2xl font-bold text-neon-orange font-orbitron">
            Score: {score}/{TARGET_SCORE}
          </p>
        </div>
      </div>

      {/* Back button */}
      <div className="fixed top-4 left-4 z-20">
        <Button 
          onClick={onBackToWish} 
          variant="ghost" 
          size="sm"
          className="text-neon-purple hover:text-neon-orange"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
      </div>

      {/* Ganesha Hand */}
      <div className="fixed top-0 left-1/2 transform -translate-x-1/2 z-10">
        <div className="text-8xl animate-float">🐘</div>
      </div>

      {/* Game Area */}
      <div 
        id="game-area"
        className="relative border-2 border-neon-purple/30 rounded-2xl bg-card/20 backdrop-blur-sm"
        style={{ width: Math.min(GAME_WIDTH, window.innerWidth - 40), height: GAME_HEIGHT }}
      >
        {/* Laddus */}
        {laddus.map(laddu => (
          <div
            key={laddu.id}
            className="absolute text-4xl glow-animation"
            style={{
              left: `${(laddu.x / GAME_WIDTH) * 100}%`,
              top: `${(laddu.y / GAME_HEIGHT) * 100}%`,
              filter: 'drop-shadow(0 0 10px #ff6b35)',
            }}
          >
            🟠
          </div>
        ))}

        {/* Basket (Mouse character) */}
        <div
          className="absolute bottom-4 transition-all duration-100 ease-out"
          style={{ 
            left: `${basketPosition}%`,
            width: `${(BASKET_WIDTH / GAME_WIDTH) * 100}%`,
          }}
        >
          <div className="text-6xl glow-animation">🐭🧺</div>
        </div>

        {/* Mobile controls */}
        <div className="absolute bottom-0 left-0 right-0 h-20 md:hidden">
          <div className="flex h-full">
            <button
              className="flex-1 bg-neon-purple/20 backdrop-blur-sm border-r border-neon-purple/30 flex items-center justify-center text-2xl"
              onTouchStart={() => moveBasket('left')}
            >
              ←
            </button>
            <button
              className="flex-1 bg-neon-purple/20 backdrop-blur-sm flex items-center justify-center text-2xl"
              onTouchStart={() => moveBasket('right')}
            >
              →
            </button>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="mt-4 text-center text-sm text-neon-purple">
        <p className="hidden md:block">Use ← → arrow keys to move</p>
        <p className="md:hidden">Tap left or right side to move</p>
      </div>
    </div>
  );
};

export default GameScreen;