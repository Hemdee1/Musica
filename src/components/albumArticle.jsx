import { Heart, More } from "iconsax-react";
import { useEffect, useState } from "react";
import { useGlobalContext } from "../context/context";

const AlbumArticle = ({ cover, title, artist, id, playId, duration }) => {
  const { selectMusic, playing } = useGlobalContext();
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (playing.id === id) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  }, [playing]);

  return (
    <button
      className={`flex justify-between items-center h-16 z-10 rounded-lg pl-2 bg-[#5152535e] backdrop-blur-md  ${
        isPlaying ? "text-primary-yellow" : ""
      }`}
      onClick={() => selectMusic(id, playId)}
    >
      <div className="flex items-center gap-4 flex-[1.5]">
        <img
          src={cover}
          className={`w-12 h-12 rounded-lg ${
            isPlaying ? "border-2 border-primary-yellow" : ""
          }`}
        />
        <Heart className="text-primary-yellow hidden md:block" />
      </div>
      <div className="flex-[4] flex flex-col md:flex-row justify-between items-center md:mr-10">
        <h3 className="text-xs sm:text-sm flex-[1]">
          {title} - {artist}
        </h3>
        <div className="flex-[1]">
          <h3 className="text-xs sm:text-sm text-start md:text-center mt-1 md:mt-0">
            Single
          </h3>
        </div>
      </div>

      {/* <div className="flex-[3]">
      </div> */}
      <div className="flex-[1] sm:flex-[2] flex justify-around  items-end md:items-center flex-col-reverse md:flex-row mr-3 md:mr-0">
        <h3 className="text-xs sm:text-sm mt-2 md:mt-0">{duration}</h3>
        <More
          size="18"
          className="rotate-90 text-primary-yellow cursor-pointer"
        />
      </div>
    </button>
  );
};

export default AlbumArticle;
