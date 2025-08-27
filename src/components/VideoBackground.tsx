import { useEffect, useRef } from 'react';
import videoSrc from '../assets/video.mp4';

const VideoBackground = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(error => {
        console.log('Video autoplay failed:', error);
      });
    }
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Video background - full coverage with minimal overlay */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover opacity-90"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      
      {/* Very subtle dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20 z-10"></div>
      
      {/* Fallback for browsers that don't support video */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-orange-900 hidden video-fallback"></div>
    </div>
  );
};

export default VideoBackground;
