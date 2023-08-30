import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectAlbums } from "../../store/selectors";
import styles from "./Albums.module.css";

const Albums: React.FC = () => {
  const albums = useSelector(selectAlbums);

  return (
    <div className={styles.albumsWrapper}>
      <div className={styles.title}>Your Albums</div>
      {albums.map((album, index) => (
        <Link to={`/song/${index}`} className={styles.link} key={album.id}>
          <div key={album.id} className={styles.album}>
            <img
              src={`/covers/${album.cover}.jpg`}
              alt={album.name}
              className={styles.cover}
            />
            <div className={styles.name}>{album.name}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Albums;
