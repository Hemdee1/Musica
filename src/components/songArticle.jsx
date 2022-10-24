import { useEffect, useState } from "react";
import { useGlobalContext } from "../context/context";

const SongArticle = ({ cover, title, artist, id }) => {
  const { selectMusic, playing } = useGlobalContext();
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (playing?.id === id) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  }, [playing]);

  return (
    <article
      className="min-w-[9rem] text-start cursor-pointer"
      onClick={() => selectMusic(id)}
    >
      <img
        src={cover}
        alt=""
        className={`w-[100%]  h-36 object-cover rounded-3xl transition-all ${
          isPlaying ? "border-4 border-primary-yellow" : ""
        }`}
      />
      <h2
        className={`text-md mt-1 transition-all ${
          isPlaying ? "text-yellow-300" : ""
        }`}
      >
        {title}
      </h2>
      <h3
        className={`text-sm text-gray-400 transition-all ${
          isPlaying ? "text-yellow-600" : ""
        }`}
      >
        {artist}
      </h3>
    </article>
  );
};

export default SongArticle;
