import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { RefreshCw, RotateCcw } from 'lucide-react';

interface GameOverScreenProps {
  score: number;
  blessing: string;
  onBackToWish: () => void;
  onPlayAgain: () => void;
}

const GameOverScreen = ({ score, blessing, onBackToWish, onPlayAgain }: GameOverScreenProps) => {
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
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        className="w-full max-w-2xl text-center"
      >
        {/* Game Over Card */}
        <div className="card-neon relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-4 left-4 text-3xl animate-pulse">🐘</div>
          <div className="absolute top-4 right-4 text-3xl animate-pulse" style={{ animationDelay: '0.5s' }}>✨</div>
          <div className="absolute bottom-4 left-4 text-2xl animate-pulse" style={{ animationDelay: '1s' }}>🪔</div>
          <div className="absolute bottom-4 right-4 text-2xl animate-pulse" style={{ animationDelay: '1.5s' }}>🌸</div>

          <div className="text-center mb-6">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-6xl mb-4"
            >
              😅
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-neon mb-2 font-orbitron text-glow">
              Oops! You dropped a laddu! 🟠
            </h2>
            <p className="text-xl text-neon-purple mb-4">
              But Bappa still blesses you 🙏
            </p>
            <div className="text-lg text-neon-orange font-bold">
              Final Score: {score}
            </div>
          </div>

          {/* Consolation Blessing */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mb-8"
          >
            <div className="text-center mb-4">
              <div className="text-2xl mb-2">🐘✨🙏✨🐘</div>
            </div>
            
            <div className="p-6 bg-card/50 rounded-2xl border border-neon-orange/50 neon-border">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="text-xl md:text-2xl text-blessing leading-relaxed font-medium"
              >
                "{blessing}"
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="text-lg text-neon-purple mt-4 font-semibold text-center"
              >
                🐭: {thankYouMessage}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="text-2xl mt-4"
            >
              🌸🍯🌺🍯🌸
            </motion.div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              onClick={onPlayAgain}
              className="btn-game flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              Try Again
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

      {/* Floating consolation elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute inset-0 pointer-events-none"
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3,
              delay: i * 0.3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            {i % 2 === 0 ? '🟠' : '🌸'}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default GameOverScreen;