import { useState, useRef, useEffect } from "react";
import { Song } from "../../store/types";
import styles from "./Player.module.css";

interface PlayerProps {
  song?: Song;
}

function Player(props: PlayerProps) {
  const [currentSongFile, setCurrentSongFile] = useState<string>();
  const audioRef = useRef(null);

  useEffect(() => {
    setCurrentSongFile(props.song?.file);

    if (audioRef.current) {
      (audioRef.current as any).load();
    }
  }, [props.song]);

  return (
    <div className="player">
      <div className={styles.title}>{props.song?.name || "No song active"}</div>
      <audio controls ref={audioRef}>
        <source src={`/music/${currentSongFile}.mp3`} type="audio/mpeg" />
      </audio>
    </div>
  );
}

export default Player;
