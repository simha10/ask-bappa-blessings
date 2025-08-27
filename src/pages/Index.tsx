import { useState } from 'react';
import LandingPage from '@/components/LandingPage';
import AudioControl from '@/components/AudioControl';
import GameScreen from '@/components/GameScreen';
import VictoryScreen from '@/components/VictoryScreen';
import GameOverScreen from '@/components/GameOverScreen';
import { getRandomBlessing } from '@/data/blessings';

type AppState = 'landing' | 'game' | 'victory' | 'gameOver';

const Index = () => {
  const [currentState, setCurrentState] = useState<AppState>('landing');
  const [currentBlessing, setCurrentBlessing] = useState('');
  const [userWish, setUserWish] = useState('');
  const [gameScore, setGameScore] = useState(0);
  const [isSpecialBlessing, setIsSpecialBlessing] = useState(false);

  const handleAskBappa = (wish: string) => {
    setUserWish(wish);
    setCurrentState('game');
    setGameScore(0);
  };

  const handleGetAnother = () => {
    setCurrentBlessing(getRandomBlessing());
  };

  const handleStartGame = () => {
    setCurrentState('game');
    setGameScore(0);
  };

  const handleGameOver = (score: number, won: boolean) => {
    setGameScore(score);
    if (won) {
      setCurrentState('victory');
      setIsSpecialBlessing(true);
    } else {
      setCurrentBlessing(getRandomBlessing());
      setIsSpecialBlessing(false);
      setCurrentState('gameOver');
    }
  };

  const handleBackToWish = () => {
    setCurrentState('landing');
    setUserWish('');
    setCurrentBlessing('');
    setGameScore(0);
    setIsSpecialBlessing(false);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <AudioControl />
      
      {currentState === 'landing' && (
        <LandingPage onAskBappa={handleAskBappa} onStartGame={handleStartGame} />
      )}
      

      {currentState === 'game' && (
        <GameScreen onGameEnd={handleGameOver} onBackToWish={handleBackToWish} />
      )}

      {currentState === 'victory' && (
        <VictoryScreen 
          score={gameScore} 
          onBackToWish={handleBackToWish}
          onPlayAgain={handleStartGame}
        />
      )}

      {currentState === 'gameOver' && (
        <GameOverScreen 
          score={gameScore}
          blessing={currentBlessing}
          onBackToWish={handleBackToWish}
          onPlayAgain={handleStartGame}
        />
      )}

      {/* Footer */}
      <footer className="fixed bottom-4 left-0 right-0 text-center z-20">
        <div className="inline-block bg-card/80 backdrop-blur-sm rounded-full px-6 py-2 shadow-lg border border-neon-purple/30 neon-border">
          <p className="text-sm text-foreground">
            Built with ❤️ for Vinayaka Chaturthi | Happy Ganesh Festival 🎉
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
