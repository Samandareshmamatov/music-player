import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward, faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import { faForward } from "@fortawesome/free-solid-svg-icons";
import { playSong } from "../utils";

const Player = ({
  songs,
  setSongs,
  songInfo,
  setSongInfo,
  timeUpdateHandler,
  audioRef,
  currentSong,
  isPlaying,
  setIsPlaying,
  setCurrentSong,
  dark
}) => {


  React.useEffect(() => {
    
    const newSongs = songs.map((song) => {
      if (song.id === currentSong.id) {
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
    setSongs(newSongs);
  }, [currentSong])

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({
      ...songInfo,
      currentTime: e.target.value,
    });
  };

  const skipTrackHandler = (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (direction === "skip-forward") {
      if (currentIndex < songs.length - 1) {
        setCurrentSong(songs[currentIndex + 1]);
      } else {
        setCurrentSong(songs[0]);
      }
    } else if (direction === "skip-back") {
      if (currentIndex > 0) {
        setCurrentSong(songs[currentIndex - 1]);
      } else {
        setCurrentSong(songs[songs.length - 1]);
      }
    }
    playSong(isPlaying, audioRef);
  };

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="player">
      <div className="time-control">
        <p className={`skip-back ${dark ? " " : "light-theme-color"}`}>
          {getTime(songInfo.currentTime)}
        </p>
        <input
          className="drag-player"
          type="range"
          min="0"
          max={songInfo.duration || 0}
          value={songInfo.currentTime}
          onChange={dragHandler}
        />
        <p className={`skip-back ${dark ? " " : "light-theme-color"}`}>
          {songInfo.duration ? getTime(songInfo.duration) : "0:00"}
        </p>
      </div>
      <div className="player-control">
        <FontAwesomeIcon
          onClick={() => skipTrackHandler("skip-back")}
          className={`skip-back ${dark ? " " : "light-theme-color"}`}
          icon={faBackward}
          size="2x"
        />
        <FontAwesomeIcon
          onClick={() => playSongHandler()}
          className={`play ${dark ? " " : "light-theme-color"}`}
          icon={isPlaying ? faPause : faPlay}
          size="2x"
        />
        <FontAwesomeIcon
          onClick={() => skipTrackHandler("skip-forward")}
          className={`skip-forward ${dark ? " " : "light-theme-color"}`}
          icon={faForward}
          size="2x"
        />
      </div>
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
};

export default Player;
