import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({
  menuRef,
  setLibraryStatus,
  dark,
  songs,
  setSongs,
  setCurrentSong,
  audioRef,
  isPlaying,
  libraryStatus,
  buttonRef
}) => {
  // const [audios, setAudios] = React.useState(songs)

  console.log(libraryStatus);
  React.useEffect(() => {
    let handler = (e) => {
      if (menuRef.current) {
        if (!menuRef.current.contains(e.target) && !buttonRef.current.contains(e.target) ) {
          console.log(e.target.id);
          setLibraryStatus(false);
        }
      }
    };
    document.addEventListener("mousedown", handler);
  });

  return (
    <div
      ref={menuRef}
      className={`library ${libraryStatus ? "active-library" : "cscs"} ${
        dark ? "" : "light-library"
      }`}
    >
      <h2 className={`${dark ? " " : "light-theme-color"}`}>
        Library
      </h2>
      <div className="library-songs">
        {songs.map((song) => {
          return (
            <LibrarySong
              isPlaying={isPlaying}
              song={song}
              key={song.id}
              setCurrentSong={setCurrentSong}
              audioRef={audioRef}
              songs={songs}
              id={song.id}
              setSongs={setSongs}
              dark={dark}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Library;
