// optional
import React from "react";
import dynamic from "next/dynamic";
import YouTube from "react-youtube";
// required
import "winbox/dist/css/themes/modern.min.css";
// optional
import "winbox/dist/css/themes/white.min.css";
import "winbox/dist/css/winbox.min.css";

const WinBox = dynamic(() => import("react-winbox"), { ssr: false });

const Player = () => {
  const [videoUrl, setVideoUrl] = React.useState("https://www.youtube.com/watch?v=9Pii6kGTxsA");
  let videoCode;
  if (videoUrl) {
    videoCode = videoUrl.split("v=")[1]?.split("&")[0];
  }

  const opts = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return (
    <WinBox width={this?.state.boxWidth ?? 300} height={500} x="right" y="bottom" noClose={this?.state.inEditing}>
      <div className="card font-satoshi p-2 ">
        <h1 className="text-2xl font-twist">Jukebox</h1>
        <label> Now Playing:</label> <input value={videoUrl} onChange={e => setVideoUrl(e.target.value)} />
        <div className="card-body overflow-hidden">
          <YouTube videoId={videoCode} opts={opts} />
        </div>
      </div>
    </WinBox>
  );
};

export default Player;
