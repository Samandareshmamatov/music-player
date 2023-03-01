import React from "react";
import { playSong } from "../utils";

const LibrarySong = ({ dark, setSongs,  id,  songs,  song,  setCurrentSong,  audioRef,  isPlaying,}) => {
  const newSongs = songs.map((song) => {
    if (song.id === id) {
      return {
        ...song,
        active: true,
      };
    } else {
      return {
        ...song,
        active: false,
      };
    }
  });
  const songSelectorHandler = () => {
    setSongs(newSongs);
    setCurrentSong(song);
    playSong(isPlaying, audioRef)
  };

  return (
    <div
      onClick={() => songSelectorHandler()}
      className={`${dark ? "library-song" : "library-song-light"} ${song.active ? (dark ? "selected" : "selected-light")  : ""}`}
    >
      <img src={song.cover} alt="Music img" />
      <div className="song-description">
        <h3 className={dark ? " " : "light-theme-color"}>{song.name}</h3>
        <h4 className={dark ? " " : "light-theme-color"}>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
