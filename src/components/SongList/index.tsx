import React, { useState } from "react";
import { Album, Song } from "../../store/types";
import { useSelector } from "react-redux";
import { selectAlbum } from "../../store/selectors";
import { useParams } from "react-router-dom";
import Player from "../Player";
import styles from "./SongList.module.css";

function SongList() {
  const { songId } = useParams();

  const albumAtIndex: Album = useSelector(
    selectAlbum(songId ? parseInt(songId) : 0)
  );
  const songs: Song[] = albumAtIndex.songs;
  const [chosenSong, setChosenSong] = useState<Song>(songs[0]);

  const onSongSelect = (song: Song) => () => {
    setChosenSong(song);
  };

  const playNext = () => {
    if (chosenSong) {
      const currentIndex = songs.indexOf(chosenSong);
      const nextIndex = currentIndex + 1;
      if (nextIndex < songs.length) {
        setChosenSong(songs[nextIndex]);
      }
    }
  };

  const playPrevious = () => {
    if (chosenSong) {
      const currentIndex = songs.indexOf(chosenSong);
      const previousIndex = currentIndex - 1;
      if (previousIndex >= 0) {
        setChosenSong(songs[previousIndex]);
      }
    }
  };

  return (
    <div className={styles.songsWrapper}>
      <div className={styles.playerWrapper}>
        <Player song={chosenSong} />
        <div className={styles.buttonWrapper}>
          <span
            onClick={playPrevious}
            className={`${styles.button} ${styles.buttonLeft}`}
          >
            {"<<"}
          </span>
          <span
            onClick={playNext}
            className={`${styles.button} ${styles.buttonRight}`}
          >
            {">>"}
          </span>
        </div>
      </div>
      <div className={styles.songsWrapper}>
        {songs.map((song) => (
          <div
            key={song.id}
            className={`${song === chosenSong ? styles.active : null}`}
            onClick={onSongSelect(song)}
          >
            <li className={styles.song}>{song.name}</li>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SongList;
