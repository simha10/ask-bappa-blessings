import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Copy, RefreshCw, Share2 } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface BlessingCardProps {
  blessing: string;
  userWish: string;
  customNote?: string;
  onGetAnother: () => void;
  onStartGame: () => void;
  onBackToWish: () => void;
  isSpecialBlessing?: boolean;
}

const BlessingCard = ({ blessing, userWish, customNote, onGetAnother, onStartGame, onBackToWish, isSpecialBlessing }: BlessingCardProps) => {
  const handleShare = async () => {
    const shareText = `🙏 Blessing from Bappa: "${blessing}"${customNote ? `\n\nSpecial Note: "${customNote}"` : ''} 
    
🐘 Get your own blessing at: ${window.location.origin}
    
#VinayakaChaturthi #BlessingsFromBappa`;

    try {
      if (navigator.share) {
        await navigator.share({
          title: 'Blessings from Bappa',
          text: shareText,
        });
      } else {
        await navigator.clipboard.writeText(shareText);
        toast({
          title: "Blessing copied! 📋",
          description: "Share this divine blessing with your loved ones",
        });
      }
    } catch (error) {
      toast({
        title: "Unable to share",
        description: "But the blessing remains with you! 🙏",
        variant: "destructive",
      });
    }
  };

  const handleCopy = async () => {
    try {
      const textToCopy = customNote ? `${blessing}\n\nNote: ${customNote}` : blessing;
      await navigator.clipboard.writeText(textToCopy);
      toast({
        title: "Blessing copied! 📋",
        description: "Carry this blessing with you",
      });
    } catch (error) {
      toast({
        title: "Unable to copy",
        description: "But remember this blessing in your heart 💖",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        className="w-full max-w-2xl"
      >
        {/* Blessing Card */}
        <div className="card-blessing relative overflow-hidden">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-neon mb-2 font-orbitron text-glow">
              {isSpecialBlessing ? "Bappa's Divine Blessing for You ✨🐘" : "Divine Message from Bappa 🙏"}
            </h2>
            <div className="w-20 h-1 bg-gradient-glow mx-auto rounded-full glow-animation"></div>
          </div>

          {/* User's Wish */}
          <div className="mb-6 p-4 bg-card/50 rounded-xl border-l-4 border-neon-orange neon-border">
            <p className="text-sm text-neon-purple font-medium mb-1">Your wish:</p>
            <p className="text-foreground italic">"{userWish}"</p>
          </div>

          {/* Custom Note */}
          {customNote && (
            <div className="mb-6 p-4 bg-card/50 rounded-xl border-l-4 border-neon-pink neon-border">
              <p className="text-sm text-neon-pink font-medium mb-1">Your special note:</p>
              <p className="text-foreground italic text-glow">"{customNote}"</p>
            </div>
          )}

          {/* Blessing */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-2xl md:text-3xl mb-4"
            >
              🐘✨🙏✨🐘
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-xl md:text-2xl text-blessing leading-relaxed font-medium px-4"
            >
              "{blessing}"
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="text-2xl md:text-3xl mt-4"
            >
              🌸🍯🌺🍯🌸
            </motion.div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={onGetAnother}
              className="btn-neon flex items-center gap-2"
            >
              <RefreshCw className="w-4 h-4" />
              Get Another Blessing
            </Button>
            
            <Button
              onClick={onStartGame}
              className="btn-game flex items-center gap-2"
            >
              Start Ganesh Game 🎮
            </Button>

            <Button
              onClick={handleShare}
              variant="outline"
              className="border-2 border-neon-purple text-neon-purple hover:bg-neon-purple/10 flex items-center gap-2 neon-border"
            >
              <Share2 className="w-4 h-4" />
              Share My Blessing
            </Button>

            <Button
              onClick={handleCopy}
              variant="outline"
              className="border-2 border-neon-pink text-neon-pink hover:bg-neon-pink/10 flex items-center gap-2 neon-border"
            >
              <Copy className="w-4 h-4" />
              Copy
            </Button>
          </div>
        </div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="text-center mt-6"
        >
          <Button
            onClick={onBackToWish}
            variant="ghost"
            className="text-neon-purple hover:text-neon-orange hover:bg-neon-purple/10"
          >
            ← Make Another Wish
          </Button>
        </motion.div>
      </motion.div>

      {/* Floating celebration elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute inset-0 pointer-events-none"
      >
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3,
              delay: i * 0.3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            {i % 2 === 0 ? '✨' : '🌸'}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default BlessingCard;