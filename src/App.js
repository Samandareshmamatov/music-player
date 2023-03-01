import React from 'react';
import Library from './components/Library';
import Nav from './components/Nav';
import Player from './components/Player';
import Song from './components/Song';
import "./styles/app.scss";
import data from "./data";

function App() {

  const [songs, setSongs] = React.useState(data());
  const [currentSong, setCurrentSong] = React.useState(songs[0]);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const audioRef = React.useRef(null);
  const [songInfo, setSongInfo] = React.useState({
    currentTime: 0,
    duration: null
  });
  const [libraryStatus, setLibraryStatus] = React.useState(false)
  const [dark, setDark] = React.useState(true);
  const menuRef = React.useRef(null);
  const buttonRef = React.useRef(null);

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration,
    })
  }

  return (
    <div className={`App ${dark ? "dark-theme" : "light-theme"}`}>
      <Nav buttonRef={buttonRef} libraryStatus={libraryStatus} dark={dark} setDark={setDark} setLibraryStatus={setLibraryStatus} />
      <Song dark={dark} currentSong={currentSong} />
      <Player dark={dark} songs={songs} setSongInfo={setSongInfo} songInfo={songInfo} currentSong={currentSong} audioRef={audioRef} isPlaying={isPlaying} timeUpdateHandler={timeUpdateHandler} setIsPlaying={setIsPlaying} setSongs={setSongs} setCurrentSong={setCurrentSong} />
      <Library buttonRef={buttonRef} menuRef={menuRef} dark={dark} setLibraryStatus={setLibraryStatus} libraryStatus={libraryStatus} songs={songs} setCurrentSong={setCurrentSong} audioRef={audioRef} isPlaying={isPlaying} setSongs={setSongs} />
    </div>
  );
}

export default App;
