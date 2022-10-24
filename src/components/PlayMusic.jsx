import {
  Next,
  Play,
  Pause,
  Previous,
  RepeateOne,
  Shuffle,
  VolumeHigh,
} from "iconsax-react";
import { motion } from "framer-motion";
import { fadeUp } from "../utils/data";
import { useGlobalContext } from "../context/context";
import { useEffect, useState } from "react";

const PlayMusic = () => {
  const [nowPlaying, setNowPlaying] = useState({});

  const {
    volume,
    forward,
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
    timer,
    forwardRef,
  } = useGlobalContext();

  useEffect(() => {
    if (playing) {
      setNowPlaying(playing);
    }
  }, [playing]);

  const { artist, title, cover, audio: song, duration } = nowPlaying;

  return (
    <motion.section
      className="fixed bottom-0 left-0 w-[100%] h-24 z-40 bg-black bg-opacity-10 backdrop-blur-lg  border-t-[1px] border-gray-500 pl-[3%] lg:pl-[8%] pr-[3%] flex items-center play"
      {...fadeUp}
    >
      <audio src={song} ref={audioRef} />
      {/* info */}
      <div className="flex w-[100%] mb-6 sm:mb-0 sm:w-[30%] lg:w-[20%]">
        <img
          src={cover}
          alt="album cover"
          className="object-cover h-14 w-14 rounded-xl"
        />
        <div className="flex flex-col justify-center ml-4 text-start">
          <h2 className="font-extrabold text-md">{title}</h2>
          <h3 className="text-sm text-gray-400">{artist}</h3>
        </div>
      </div>

      {/* control */}
      <div className="flex  w-[60%] items-center justify-center flex-col">
        <div className="flex items-center mb-6 sm:mb-0">
          <button
            className={`hidden ml-10 sm:block transition-all active:scale-150 ${
              isShuffle ? "bg-primary-yellow rounded-md p-1 text-black" : ""
            }`}
            onClick={handleShuffle}
          >
            <Shuffle variant="Bold" size="20" />
          </button>
          <button
            className="ml-4 transition-all sm:ml-10 active:scale-150"
            onClick={prevMusic}
          >
            <Previous variant="Bold" size="20" />
          </button>
          <button
            className="p-2 ml-4 transition-all rounded-full sm:ml-10 bg-primary-yellow active:scale-150 "
            onClick={handlePlay}
          >
            {!isPlaying ? (
              <Play variant="Bold" size="20" />
            ) : (
              <Pause variant="Bold" size="20" />
            )}
          </button>
          <button
            className="ml-4 transition-all sm:ml-10 active:scale-150"
            onClick={nextMusic}
          >
            <Next variant="Bold" size="20" />
          </button>
          <button
            className={`hidden ml-10 sm:block transition-all active:scale-150 ${
              isRepeat ? "bg-primary-yellow rounded-md p-1 text-black" : ""
            }`}
            onClick={handleRepeat}
          >
            <RepeateOne variant="Bold" size="20" />
          </button>
        </div>
        {/* forward button */}
        <div className="absolute left-0 flex items-center justify-center w-full px-2 mt-4 bottom-1 sm:px-0 sm:w-full sm:relative">
          <span className="mr-2 text-sm">
            {timer?.minute}:{timer?.second}
          </span>
          <input
            type="range"
            value={forward}
            onChange={(e) => handleChange(e, "forward")}
            ref={forwardRef}
          />
          <span className="text-sm">{duration}</span>
        </div>
      </div>

      {/* volume */}
      <div className=" w-[20%] items-center ml-4 hidden sm:flex">
        <VolumeHigh />
        <input
          type="range"
          className="ml-4 volume"
          value={volume}
          onChange={(e) => handleChange(e, "volume")}
        />
      </div>
    </motion.section>
  );
};

export default PlayMusic;
