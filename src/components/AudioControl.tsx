import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AudioControl = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Create a simple festive audio tone using Web Audio API
    const createAudioContext = () => {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      
      const createTone = (frequency: number, duration: number, startTime: number) => {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(frequency, startTime);
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0, startTime);
        gainNode.gain.linearRampToValueAtTime(0.1, startTime + 0.1);
        gainNode.gain.linearRampToValueAtTime(0.05, startTime + duration - 0.1);
        gainNode.gain.linearRampToValueAtTime(0, startTime + duration);
        
        oscillator.start(startTime);
        oscillator.stop(startTime + duration);
      };

      // Create a simple spiritual melody
      const playMelody = () => {
        if (!isMuted) {
          const now = audioContext.currentTime;
          // Simple spiritual notes
          createTone(523.25, 0.5, now); // C5
          createTone(587.33, 0.5, now + 0.5); // D5
          createTone(659.25, 0.5, now + 1); // E5
          createTone(698.46, 1, now + 1.5); // F5
          
          setTimeout(() => {
            if (!isMuted) playMelody();
          }, 5000); // Repeat every 5 seconds
        }
      };

      return { playMelody, audioContext };
    };

    let audioSystem: any = null;

    if (!isMuted) {
      audioSystem = createAudioContext();
      audioSystem.playMelody();
    }

    return () => {
      if (audioSystem?.audioContext) {
        audioSystem.audioContext.close();
      }
    };
  }, [isMuted]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    setIsPlaying(!isMuted);
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <Button
        onClick={toggleMute}
        variant="secondary"
        size="icon"
        className="w-12 h-12 rounded-full shadow-lg bg-white/80 backdrop-blur-sm hover:bg-white/90 border-2 border-orange-200"
      >
        {isMuted ? (
          <VolumeX className="h-5 w-5 text-orange-600" />
        ) : (
          <Volume2 className="h-5 w-5 text-orange-600" />
        )}
      </Button>
    </div>
  );
};

export default AudioControl;