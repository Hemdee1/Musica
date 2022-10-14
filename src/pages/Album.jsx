import { Heart, MusicSquareAdd, PlayCircle } from "iconsax-react";
import AlbumArticle from "../components/albumArticle";
import { albumList, datas, fadeIn } from "../utils/data";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";

const Album = () => {
  const { id } = useParams();
  const image = datas[parseFloat(id)].image;
  const title = datas[parseFloat(id)].name;

  return (
    <motion.section className="min-h-[100vh] relative py-4" {...fadeIn}>
      <img
        src={image}
        className="absolute top-0 left-0 right-0 bottom-0 w-[100%] h-[100%] object-cover opacity-[0.15]"
      />

      {/* ALBUM INFO */}
      <div className="pt-16 pl-8 sm:pl-4 flex flex-col md:flex-row gap-6 items-start md:items-end z-10">
        <img
          src={image}
          alt="album cover"
          className="rounded-3xl w-[90%] md:w-80 h-[40vh] md:h-8w-80 object-cover"
        />
        <div className="w-[90%] md:w-[50%]">
          <h1 className="font-extrabold text-3xl ">{title}</h1>
          <h3 className="text-white text-sm  md:text-base text-opacity-80 my-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
            facere iste autem quisquam dolorem, placeat eligendi omnis.
          </h3>
          <h3 className="text-white text-sm  md:text-base text-opacity-80">
            64 songs - 16 hrs+
          </h3>
          <div className="mt-5 flex gap-3 items-center">
            <button className=" cursor-pointer flex items-center bg-white bg-opacity-10 p-2 rounded-full">
              <PlayCircle variant="Bold" className="text-primary-yellow" />
              <h3 className="text-xs md:text-base ml-2 hidden sm:block">
                Play all
              </h3>
            </button>

            <button className=" cursor-pointer flex items-center bg-white bg-opacity-10 p-2 rounded-full">
              <MusicSquareAdd variant="Bold" className="text-primary-yellow" />
              <h3 className="text-xs md:text-base ml-2 hidden sm:block">
                Add to collection
              </h3>
            </button>

            <button className=" cursor-pointer flex items-center bg-white bg-opacity-10 p-2 rounded-full">
              <Heart variant="Bold" className="text-red-500" />
            </button>
          </div>
        </div>
      </div>

      {/* ALBUM LIST */}
      <div className="mt-8 m-4 mr-4 sm:mr-8 flex flex-col gap-4 bg-primary-dark">
        {albumList.map((album, index) => (
          <AlbumArticle key={index} {...album} />
        ))}
      </div>
    </motion.section>
  );
};

export default Album;
