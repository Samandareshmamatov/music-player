import React from 'react'

const Song = ({dark, currentSong}) => {
  return (
    <div className="song-container">
      <img src={currentSong.cover} alt="Music img" />
      <h2  className={`${dark ? " " : "light-theme-color"}`}>{currentSong.name}</h2>
      <h3  className={`${dark ? " " : "light-theme-color"}`}>{currentSong.artist}</h3>
    </div>
  );
}

export default Song;