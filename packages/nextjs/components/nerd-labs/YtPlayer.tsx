// optional
import dynamic from "next/dynamic";
import YouTube from "react-youtube";
// required
import "winbox/dist/css/themes/modern.min.css";
// optional
import "winbox/dist/css/themes/white.min.css";
import "winbox/dist/css/winbox.min.css";

const WinBox = dynamic(() => import("react-winbox"), { ssr: false });

const Player = () => {
  const [videoUrl, setVideoUrl] = React.useState("https://www.youtube.com/watch?v=rPjez8z61rI");
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
    <WinBox width={this?.state.boxWidth ?? 500} height={300} x="right" y="bottom" noClose={this?.state.inEditing}>
      <div>
        <div>
          <h1 className="text-2xl">$FCKN 🍗 Jukebox</h1>
          <div></div>
        </div>
        <div>
          <label> Now Playing:</label> <input value={videoUrl} onChange={e => setVideoUrl(e.target.value)} />
          <div>
            <YouTube videoId={videoCode} opts={opts} />
          </div>
        </div>
      </div>
    </WinBox>
  );
};

export default Player;
