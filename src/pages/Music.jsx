import CollectionArticle from "../components/collectionArticle";
import { songs, fadeIn } from "../utils/data";
import { motion } from "framer-motion";

const Music = () => {
  const click = true;

  return (
    <motion.section
      className="min-h-[100vh] relative p-6 md:pl-0 pb-6 pt-20"
      {...fadeIn}
    >
      <div className="flex gap-4">
        <button
          className={`text-sm text-gray-500 px-4 py-2 border-[1px] border-gray-500 rounded-full w-1/2 sm:w-auto cursor-pointer ${
            click ? "bg-primary-yellow text-primary-dark" : ""
          } `}
        >
          My Collections
        </button>
        <button
          className={`text-sm text-gray-500 px-4 py-2 border-[1px] border-gray-500 rounded-full w-1/2 sm:w-auto cursor-pointer ${
            !click ? "bg-primary-yellow text-primary-dark" : ""
          } `}
        >
          Likes
        </button>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row  gap-8 flex-wrap">
        {songs.map((song, index) => (
          <CollectionArticle key={index} {...song} />
        ))}
      </div>
    </motion.section>
  );
};

export default Music;
