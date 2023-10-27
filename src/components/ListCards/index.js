import "./style.css";
import { useRef } from "react";

const ListCards = ({ musics }) => {
  const songRef = useRef(null);

  const handlePlay = () => {
    songRef.current.play();
  };
  return (
    <>
      <div className="play-list">
        <audio src={musics.url} ref={songRef}></audio>
        <img onClick={handlePlay} src={musics.cover} alt={musics.title} />
        <h2>{musics.title}</h2>
        <p>{musics.description}</p>
      </div>
    </>
  );
};

export default ListCards;
