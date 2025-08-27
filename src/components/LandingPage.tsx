import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
interface LandingPageProps {
  onAskBappa: (wish: string) => void;
  onStartGame: () => void;
}

const LandingPage = ({ onAskBappa, onStartGame }: LandingPageProps) => {
  const [wish, setWish] = useState('');

  const handleSubmit = () => {
    if (wish.trim()) {
      onAskBappa(wish);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 relative z-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-neon mb-4 text-glow">
          Ask Bappa for Blessing 🙏
        </h1>
        <p className="text-lg md:text-xl text-neon-purple font-medium">
          Share your wishes and receive divine blessings from Lord Ganesha
        </p>
      </motion.div>

      {/* Ganesha Image */}
      <motion.div
        className="mb-8"
      >
        
      </motion.div>

      {/* Input Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="w-full max-w-lg space-y-6 card-neon"
      >
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-neon-orange mb-2 font-orbitron text-glow">
            Share your wish or worry...
          </h2>
          <p className="text-neon-purple">
            Let Bappa guide you with divine wisdom
          </p>
        </div>

        <Textarea
          value={wish}
          onChange={(e) => setWish(e.target.value)}
          placeholder="Dear Bappa, I wish for..."
          className="min-h-[120px] text-lg border-2 border-neon-purple/30 focus:border-neon-orange bg-card/70 backdrop-blur-sm resize-none text-foreground"
          maxLength={500}
        />

          <Button
            onClick={handleSubmit}
            disabled={!wish.trim()}
            className="w-full btn-neon text-xl py-6 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Receive Blessing ✨
          </Button>

          {/* Start Game Button */}
          <Button
            onClick={onStartGame}
            className="w-full btn-game text-xl py-6 mt-4"
          >
            Start Game 🎮
          </Button>

        <div className="text-center text-sm text-neon-purple">
          <div>Wish: {wish.length}/500 characters</div>
        </div>
      </motion.div>
    </div>
  );
};

export default LandingPage;