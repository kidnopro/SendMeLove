// src/components/MusicPlayer.js
import { useEffect } from "react";

const MusicPlayer = () => {
  useEffect(() => {
    const iframe = document.getElementById("youtube-music");
    if (iframe) {
      const sendPlayCommand = () => {
        iframe.contentWindow.postMessage(
          '{"event":"command","func":"playVideo","args":""}',
          "*"
        );
      };
      setTimeout(sendPlayCommand, 1000);
    }
  }, []);

  return (
    <div>
      <iframe
        id="youtube-music"
        width="0"
        height="0"
        src="https://www.youtube.com/embed/kMg3wTAhNsY?autoplay=1&mute=0"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="YouTube Music"
      />
    </div>
  );
};

export default MusicPlayer;
