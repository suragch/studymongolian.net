import React, { useRef, useState } from 'react';
import useIsBrowser from '@docusaurus/useIsBrowser';

const AudioPlayer = ({ src }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const isBrowser = useIsBrowser();

  const togglePlayPause = () => {
    if (isBrowser) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  if (!isBrowser) {
    return null; // Render nothing on the server side
  }

  return (
    <>
      <audio ref={audioRef} src={src} onEnded={() => setIsPlaying(false)} />
      <button onClick={togglePlayPause} style={{
        borderRadius: '50%',
        width: '30px',
        height: '30px',
        border: '1px solid #ccc',
        backgroundColor: '#fff',
        color: '#333',
        fontSize: '1em',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        {isPlaying ? '❚❚' : '▶'}
      </button>
    </>
  );
};

export default AudioPlayer;
