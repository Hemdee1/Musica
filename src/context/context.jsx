import { createContext, useContext, useEffect, useRef, useState } from "react";

const Appcontext = createContext();

const AppProvider = ({ children }) => {
  // FOR NAVIGATION
  const [openNav, setOpenNav] = useState(false);

  const toggleNav = () => {
    setOpenNav((prev) => !prev);
  };

  const closeNav = () => {
    if (!openNav) return;
    setOpenNav(false);
  };

  // FOR MUSIC DATA
  const [newMusics, setNewMusics] = useState([]);
  const [popularMusics, setPopularMusics] = useState([]);
  const [playlists, setPlaylists] = useState([]);

  const [musics, setMusics] = useState([]);
  const [playing, setPlaying] = useState(null);
  const [playingPosition, setPlayingPostion] = useState(0);
  const [playingAlbumType, setPlayingAlbumType] = useState("new");

  const [isPlaying, setIsPlaying] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);

  const audioRef = useRef();

  const fetchData = async (type) => {
    try {
      const res = await fetch("https://musica-api.up.railway.app/" + type);
      // const res = await fetch("http://localhost:3000/" + type);
      const data = await res.json();

      if (res.ok) {
        if (type === "new") {
          setPlaying(data[0]);
          setMusics(data);
          setNewMusics(data);
          return;
        }
        if (type === "popular") {
          setPopularMusics(data);
          return;
        }
        if (type === "playlist") {
          setPlaylists(data);
          return;
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData("new");
    fetchData("popular");
    fetchData("playlist");
  }, []);

  const playMusic = () => {
    setTimeout(() => {
      audioRef.current.play();
      setIsPlaying(true);
    }, 500);
  };

  const resetPlaybar = () => {
    forwardRef.current.style.backgroundSize = "0% 100%";
    setForward(0);
  };

  // FOR NEXT BUTTON
  const nextMusic = () => {
    resetPlaybar();

    if (isShuffle) {
      const random = Math.floor(Math.random() * musics.length);
      setPlaying(musics[random]);
      setPlayingPostion(random);

      if (isPlaying) {
        playMusic();
      }
      return;
    }

    if (playingPosition === musics.length - 1) {
      setPlaying(musics[0]);
      setPlayingPostion(0);
    } else {
      setPlaying(musics[playingPosition + 1]);
      setPlayingPostion(playingPosition + 1);
    }

    if (isPlaying) {
      playMusic();
    }
  };

  // FOR PREVIOUS BUTTON
  const prevMusic = () => {
    resetPlaybar();

    if (isShuffle) {
      const random = Math.floor(Math.random() * musics.length);
      setPlaying(musics[random]);
      setPlayingPostion(random);

      if (isPlaying) {
        playMusic();
      }
      return;
    }

    if (playingPosition === 0) {
      setPlaying(musics[musics.length - 1]);
      setPlayingPostion(musics.length - 1);
    } else {
      setPlaying(musics[playingPosition - 1]);
      setPlayingPostion(playingPosition - 1);
    }

    if (isPlaying) {
      playMusic();
    }
  };

  // FOR PLAY AND PAUSE BUTTONS
  const handlePlay = () => {
    if (!isPlaying) {
      setIsPlaying(true);
      audioRef.current.play();
    } else {
      setIsPlaying(false);
      audioRef.current.pause();
    }
  };

  // FOR REPEAT BUTTON
  const handleRepeat = () => {
    setIsRepeat((prev) => !prev);
  };

  // FOR SHUFFLE BUTTON
  const handleShuffle = () => {
    setIsShuffle((prev) => !prev);
  };

  // PLAY A MUSIC FROM THE HOMEPAGE
  const selectMusic = (id, playId) => {
    resetPlaybar();

    const [type, tempIndex1] = id.split("-");
    const index = +tempIndex1 - 1;

    if (playId) {
      const [type2, tempIndex2] = playId.split("-");
      const index2 = +tempIndex2 - 1;
      //
      setPlayingAlbumType(type2);
      setMusics(playlists[index2].files);
      setPlaying(playlists[index2].files[index]);
      setPlayingPostion(index);
      //
    }

    if (type === playingAlbumType && !playId) {
      //
      setPlaying(musics[index]);
      setPlayingPostion(index);
      //
    } else if (type == "new") {
      //
      setPlayingAlbumType(type);
      setMusics(newMusics);
      setPlaying(newMusics[index]);
      setPlayingPostion(index);
      //
    } else if (type == "popular") {
      //
      setPlayingAlbumType(type);
      setMusics(popularMusics);
      setPlaying(popularMusics[index]);
      setPlayingPostion(index);
      //
    }

    playMusic();
  };

  // PLAY WITH SPACEBAR ON KEYBOARD
  const playWithKeyboard = (e) => {
    if (e.key == " ") {
      e.preventDefault();
      handlePlay();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", playWithKeyboard);
    return () => window.removeEventListener("keydown", playWithKeyboard);
  }, [playWithKeyboard]);

  // FOR VOLUME AND FORWARD
  const [forward, setForward] = useState(0);
  const [volume, setVolume] = useState(100);
  const [timer, setTimer] = useState({});
  const forwardRef = useRef();

  const updateNextSong = () => {
    if (isRepeat) {
      playMusic();
      return;
      //
    } else if (isShuffle) {
      const random = Math.floor(Math.random() * musics.length);
      setPlaying(musics[random]);
      setPlayingPostion(random);
      playMusic();
      return;
      //
    } else {
      nextMusic();
    }
  };

  // function for updating the forward range
  const updateRange = (value) => {
    setTimeout(() => {
      //
      const currentTime = Math.floor(audioRef.current.currentTime);
      const minute = Math.floor(currentTime / 60);
      let second = Math.floor(currentTime % 60);
      if (second < 10) second = "0" + second;

      setTimer({ minute, second });

      const duration = Math.floor(audioRef.current.duration);

      if (!value) {
        value = Math.floor((currentTime / duration) * 100);

        forwardRef.current.style.backgroundSize = value + "% 100%";
        setForward(value ? value : 0);
      } else {
        audioRef.current.currentTime = (value / 100) * duration;
      }

      forwardRef.current.style.backgroundSize = value + "% 100%";
      setForward(value ? value : 0);

      if (currentTime === duration) {
        updateNextSong();
      }
      //
    }, 300);
  };

  // handling volume and forward change
  const handleChange = (e, active) => {
    const target = e.target;
    const value = target.value;

    if (active === "volume") {
      //
      target.style.backgroundSize = value + "% 100%";
      audioRef.current.volume = volume / 100;
      setVolume(value);
      //
    } else if (active === "forward") {
      //
      setForward(value);
      updateRange(value);
      //
    }
  };

  // update timer and forward range
  useEffect(() => {
    setTimeout(updateRange, 400);
  }, [isPlaying, audioRef.current?.currentTime]);

  // update duration when mount
  // useEffect(() => {
  //   setTimeout(() => {
  //     const duration = audioRef.current.duration;
  //     const minute = Math.floor(duration / 60);
  //     let second = Math.floor(duration % 60);
  //     if (second < 10) second = "0" + second;

  //     setDuration({ minute, second });
  //   }, 300);
  // }, [playing]);

  // FOR COLLECTIONS
  const prevCol = JSON.parse(localStorage.getItem("my-collection"));
  const [collection, setCollection] = useState(prevCol ? prevCol : []);

  const addToCollection = (playlist) => {
    if (collection.find((col) => col.id === playlist.id)) {
      //
      const newCol = collection.filter((col) => col.id !== playlist.id);
      setCollection(newCol);
      localStorage.setItem("my-collection", JSON.stringify(newCol));
      //
    } else {
      //
      const newCol = [...collection, playlist];
      setCollection(newCol);
      localStorage.setItem("my-collection", JSON.stringify(newCol));
      //
    }
  };

  // FOR LIKES
  const prevLikes = JSON.parse(localStorage.getItem("my-likes"));
  const [likes, setLikes] = useState(prevLikes ? prevLikes : []);

  const addToLikes = (playlist) => {
    if (likes.find((like) => like.id === playlist.id)) {
      //
      const newLikes = likes.filter((like) => like.id !== playlist.id);
      setLikes(newLikes);
      localStorage.setItem("my-likes", JSON.stringify(newLikes));
      //
    } else {
      //
      const newLikes = [...likes, playlist];
      setLikes(newLikes);
      localStorage.setItem("my-likes", JSON.stringify(newLikes));
      //
    }
  };

  // FOR SEARCH
  const [searchData, setSearchData] = useState([]);
  const [openSearch, setOpenSearch] = useState(false);

  useEffect(() => {
    setSearchData([...newMusics, ...popularMusics]);
  }, [newMusics, popularMusics]);

  const searchMusic = (data) => {
    const searched = [...newMusics, ...popularMusics].filter(
      (music) =>
        music.artist.toLowerCase().includes(data.toLowerCase()) ||
        music.title.toLowerCase().includes(data.toLowerCase())
    );
    setSearchData(searched);
    setOpenSearch(true);
  };

  const closeSearch = () => {
    setOpenSearch(false);
  };

  return (
    <Appcontext.Provider
      value={{
        openNav,
        toggleNav,
        closeNav,
        forward,
        volume,
        handleChange,
        playing,
        nextMusic,
        prevMusic,
        audioRef,
        isPlaying,
        handlePlay,
        isRepeat,
        isShuffle,
        handleRepeat,
        handleShuffle,
        newMusics,
        popularMusics,
        playlists,
        selectMusic,
        forwardRef,
        timer,
        collection,
        likes,
        addToCollection,
        addToLikes,
        searchMusic,
        searchData,
        openSearch,
        closeSearch,
      }}
    >
      {children}
    </Appcontext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(Appcontext);
};

export default AppProvider;
