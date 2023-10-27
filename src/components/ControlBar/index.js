import "./style.css";
import ImgStop from "../../assets/stop.svg";
import ImgPlay from "../../assets/play.svg";
import ImgNext from "../../assets/next.svg";
import ImgPrev from "../../assets/previous.svg";
import ImgPause from "../../assets/pause.svg";
import { useRef } from "react";

const ControlBar = ({ music, nextMusic, prevMusic, playing, setPlaying }) => {
  const musicRef = useRef(null);

  const handlePlay = () => {
    setPlaying(!playing);
    musicRef.current.play();
  };

  const handlePause = () => {
    setPlaying(false);
    musicRef.current.pause();
  };

  const handleStop = () => {
    musicRef.current.pause();
    musicRef.current.currentTime = 0;
  };

  return (
    <>
      <div className="footer">
        <div>
          <h2>{music.title}</h2>
          <p>{music.artist}</p>
        </div>
        <div className="control-play">
          <div>
            <audio src={music.url} ref={musicRef}></audio>
            <img onClick={handleStop} src={ImgStop} alt="botão de stop" />
            <img
              onClick={prevMusic}
              src={ImgPrev}
              alt="botão para voltar musica"
            />
            {playing ? (
              <img onClick={handlePause} src={ImgPause} alt="botão de pause" />
            ) : (
              <img onClick={handlePlay} src={ImgPlay} alt="botão de play" />
            )}

            <img
              onClick={nextMusic}
              src={ImgNext}
              alt="botão para avançar para próxima musica"
            />
          </div>

          <div className="progress-bar">
            <div className="progress"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ControlBar;
