import "./style.css";
import Header from "../../components/Header";
import ListCards from "../../components/ListCards";
import musics from "../../musics";
import ControlBar from "../../components/ControlBar";
import { useState } from "react";

function Main() {
  const [song, setSongs] = useState(musics[0]);
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);

  const nextMusic = () => {
    if (index + 1 < musics.length) {
      setIndex(index + 1);
      setSongs(musics[index + 1]);
      setPlaying(false);
    }
  };

  const prevMusic = () => {
    if (index > 0) {
      setIndex(index - 1);
      setSongs(musics[index - 1]);
      setPlaying(false);
    }
  };

  return (
    <div className="container">
      <Header />
      <div className="playListCards">
        <h2>The best play list</h2>
        <div>
          {musics.map((musics) => (
            <ListCards
              key={musics.id}
              musics={musics}
              setPlaying={setPlaying}
            />
          ))}
        </div>
      </div>

      <ControlBar
        listCard={ListCards}
        playing={playing}
        setPlaying={setPlaying}
        music={song}
        nextMusic={nextMusic}
        prevMusic={prevMusic}
      />
    </div>
  );
}

export default Main;
