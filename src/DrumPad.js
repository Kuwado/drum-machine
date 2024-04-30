import React, { useEffect, useRef } from 'react';

const DrumPad = ({ keyTrigger, audioSrc, displayText, onClick }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleKeyDown = (e) => {
    if (e.key.toUpperCase() === keyTrigger) {
      playSound();
    }
  };

  const playSound = () => {
    const audio = audioRef.current;
    audio.currentTime = 0;
    audio.play();
    onClick(displayText);
  };

  return (
    <div className="drum-pad" onClick={playSound}>
      <audio ref={audioRef} src={audioSrc} className="clip" id={keyTrigger}></audio>
      {keyTrigger}
    </div>
  );
};

export default DrumPad;
