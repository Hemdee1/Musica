import { Heart, MusicSquareAdd, PlayCircle, ArrowLeft } from "iconsax-react";
import AlbumArticle from "../components/albumArticle";
import { albumList, datas, fadeIn } from "../utils/data";
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/context";
import { useEffect, useState } from "react";

const Album = () => {
  const { id } = useParams();
  const {
    playlists,
    selectMusic,
    addToCollection,
    collection,
    addToLikes,
    likes,
  } = useGlobalContext();
  const navigate = useNavigate();

  const [data, setData] = useState({});
  const [inCollection, setInCollection] = useState(
    collection.find((col) => col.id === id)
  );

  const [alreadyLike, setAlreadyLike] = useState(
    likes.find((like) => like.id === id)
  );

  useEffect(() => {
    const data = playlists.find((play) => play.id === id);
    setData(data);
  }, [playlists]);

  const handleAddToCollection = () => {
    addToCollection(data);
    setInCollection((prev) => !prev);
  };

  const handleLikes = () => {
    addToLikes(data);
    setAlreadyLike((prev) => !prev);
  };

  // const { cover, title, files } = data;
  const cover = data?.cover;
  const title = data?.title;
  const files = data?.files;
  const info = data?.info;

  const totalDuration = files?.reduce((total, file) => {
    const duration = +file?.duration.split(":")[0];
    total += duration;
    return total;
  }, 0);

  return (
    <motion.section className="min-h-[100vh] relative py-4" {...fadeIn}>
      <img
        src={cover}
        className="absolute top-0 left-0 right-0 bottom-0 w-[100%] h-[100%] object-top object-cover opacity-[0.15] "
      />

      {/* ALBUM INFO */}
      <div className="flex flex-col items-start gap-6 pt-16 pl-8 sm:pl-4 md:flex-row md:items-end">
        <button
          className="fixed z-20 p-2 rounded-full top-20 left-4 sm:left-32 bg-primary-yellow text-primary-dark"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="text-lg" />
        </button>
        <img
          src={cover}
          alt="album cover"
          className="rounded-3xl w-[90%] md:w-80 h-[40vh] md:h-8w-80 object-cover object-top"
        />
        <div className="w-[90%] md:w-[50%] z-10">
          <h1 className="text-3xl font-extrabold ">{title}</h1>
          <h3 className="my-3 text-sm text-white md:text-base text-opacity-80">
            {info}
          </h3>
          <h3 className="text-sm text-white md:text-base text-opacity-80">
            {files?.length} songs - {totalDuration} mins+
          </h3>
          <div className="z-20 flex items-center gap-3 mt-5">
            <button
              className="flex flex-col items-center p-2 bg-white rounded-3xl sm:rounded-full bg-opacity-10 sm:flex-row"
              onClick={() => selectMusic("play-1", id)}
            >
              <PlayCircle variant="Bold" className="text-primary-yellow" />
              <h3 className="ml-2 text-xs md:text-base">Play all</h3>
            </button>

            <button
              className="flex flex-col items-center p-2 bg-white rounded-3xl sm:rounded-full bg-opacity-10 sm:flex-row"
              onClick={handleAddToCollection}
            >
              <MusicSquareAdd variant="Bold" className="text-primary-yellow" />
              <h3 className="ml-2 text-xs md:text-base">
                {inCollection ? "Remove collection" : "Add collection"}
              </h3>
            </button>

            <button
              className="flex items-center p-2 transition-all bg-white rounded-full cursor-pointer bg-opacity-10 active:scale-125"
              onClick={handleLikes}
            >
              {alreadyLike ? (
                <Heart variant="Bold" size="20" className="text-red-500" />
              ) : (
                <Heart size="20" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ALBUM LIST */}
      <div className="flex flex-col gap-4 m-4 mt-8 mr-4 sm:mr-8 bg-primary-dark">
        {files?.map((album, index) => (
          <AlbumArticle key={index} {...album} playId={id} />
        ))}
      </div>
    </motion.section>
  );
};

export default Album;
