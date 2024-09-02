import { useEffect } from "react";

const MusicPlayer = () => {
  useEffect(() => {
    const loadYouTubeAPI = () => {
      const script = document.createElement("script");
      script.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(script);

      script.onload = () => {
        new window.YT.Player("youtube-music", {
          height: "0",
          width: "0",
          videoId: "kMg3wTAhNsY",
          playerVars: {
            autoplay: 1,
            mute: 0,
            playsinline: 1,
          },
          events: {
            onReady: (event) => {
              event.target.playVideo();
            },
          },
        });
      };
    };

    loadYouTubeAPI();
  }, []);

  return (
    <div>
      <div id="youtube-music"></div> 
    </div>
  );
};

export default MusicPlayer;
