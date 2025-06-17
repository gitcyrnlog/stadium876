import React, { useEffect, useRef, useState } from 'react';

interface MiniPlayerProps {
  videoSrc: string;
  title?: string;
}

const MiniPlayer: React.FC<MiniPlayerProps> = ({ videoSrc, title }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMini, setIsMini] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!videoRef.current) return;
      const rect = videoRef.current.getBoundingClientRect();
      setIsMini(rect.top < 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <div
        ref={videoRef as any}
        className={`transition-all duration-300 ${
          isMini
            ? 'fixed bottom-4 right-4 w-64 h-36 z-[10000] shadow-lg rounded-lg bg-black' // mini mode
            : 'relative w-full h-96'
        }`}
        style={{ pointerEvents: isMini ? 'auto' : 'auto' }}
      >
        <video
          src={videoSrc}
          controls
          className="w-full h-full object-cover rounded-lg"
        />
        {isMini && (
          <div className="absolute top-1 left-2 text-xs text-white bg-black/60 px-2 py-1 rounded">
            {title || 'Now Playing'}
          </div>
        )}
      </div>
    </div>
  );
};

export default MiniPlayer;
