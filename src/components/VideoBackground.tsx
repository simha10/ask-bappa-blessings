import { useEffect, useRef } from 'react';

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
      {/* Lighter overlay for better video visibility */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      
      {/* Video background - more visible */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover opacity-60"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/src/assets/video.mp4" type="video/mp4" />
      </video>
      
      {/* Fallback for browsers that don't support video */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-orange-900 hidden video-fallback"></div>
      
      {/* Very subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20 z-20"></div>
    </div>
  );
};

export default VideoBackground;
