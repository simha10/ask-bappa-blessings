import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Trophy, Sparkles, RotateCcw } from 'lucide-react';
import { getRandomSpecialBlessing } from '@/data/specialBlessings';
import { useEffect, useState } from 'react';

interface VictoryScreenProps {
  score: number;
  onBackToWish: () => void;
  onPlayAgain: () => void;
}

const VictoryScreen = ({ score, onBackToWish, onPlayAgain }: VictoryScreenProps) => {
  let thankYouMessage = '';

  if (score === 0) {
    thankYouMessage = "Can you try again? We are hungry.";
  } else if (score < 10) {
    thankYouMessage = "It's not enough, can you please try again?";
  } else if (score >= 10 && score < 20) {
    thankYouMessage = "Thanks for this, you are a true bakth!";
  } else {
    thankYouMessage = "You are a royal bakth, thank you!";
  }
  const [specialBlessing, setSpecialBlessing] = useState('');

  useEffect(() => {
    setSpecialBlessing(getRandomSpecialBlessing());
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 relative z-10 overflow-hidden">
      {/* Celebration Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              rotate: [0, 360],
              scale: [1, 1.5, 1],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3,
              delay: i * 0.1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            {i % 4 === 0 ? '🌸' : i % 4 === 1 ? '✨' : i % 4 === 2 ? '🎉' : '🌺'}
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        className="w-full max-w-2xl text-center"
      >
        {/* Victory Card */}
        <div className="card-neon relative overflow-hidden">
          {/* Glowing border animation */}
          <div className="absolute inset-0 bg-gradient-electric opacity-20 animate-celebration rounded-3xl"></div>
          
          {/* Victory Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center mb-6"
          >
            <div className="text-8xl mb-4 animate-bounce">🏆</div>
            <h1 className="text-4xl md:text-5xl font-bold text-neon mb-2 font-orbitron text-glow">
              DIVINE VICTORY!
            </h1>
            <div className="flex items-center justify-center gap-2 text-2xl text-neon-orange">
              <Trophy className="w-8 h-8" />
              <span className="font-bold">Score: {score}</span>
              <Sparkles className="w-8 h-8" />
            </div>
          </motion.div>

          {/* Special Blessing */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mb-8"
          >
            <div className="text-center mb-4">
              <div className="text-3xl mb-2">🐘✨🙏✨🐘</div>
              <h2 className="text-2xl font-bold text-neon-purple mb-4 font-orbitron">
                Bappa's Divine Blessing for You ✨🐘
              </h2>
            </div>
            
            <div className="p-6 bg-card/50 rounded-2xl border border-neon-orange/50 neon-border">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="text-xl md:text-2xl text-blessing leading-relaxed font-medium text-glow"
              >
                "{specialBlessing}"
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="text-lg text-neon-purple mt-4 font-semibold text-center"
              >
                🐭: {thankYouMessage}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="text-3xl mt-4"
            >
              🌸🍯🌺🍯🌸
            </motion.div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              onClick={onPlayAgain}
              className="btn-game flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              Play Again
            </Button>
            
            <Button
              onClick={onBackToWish}
              variant="outline"
              className="border-2 border-neon-purple text-neon-purple hover:bg-neon-purple/10 flex items-center gap-2 neon-border"
            >
              ← New Wish
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating Victory Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute inset-0 pointer-events-none"
      >
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-5xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 4,
              delay: i * 0.2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            {i % 3 === 0 ? '🎊' : i % 3 === 1 ? '🎉' : '✨'}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default VictoryScreen;