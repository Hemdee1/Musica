import CollectionArticle from "../components/collectionArticle";
import { songs, fadeIn } from "../utils/data";
import { motion } from "framer-motion";
import { useGlobalContext } from "../context/context";
import { useEffect, useRef, useState } from "react";

const Music = () => {
  const click = true;

  const { collection, likes } = useGlobalContext();
  const [openLike, setOpenLike] = useState(false);
  const [data, setData] = useState(collection);
  const likeRef = useRef();

  useEffect(() => {
    likeRef.current.classList.add("like");
    openLike ? setData(likes) : setData(collection);
    setTimeout(() => {
      likeRef.current.classList.remove("like");
    }, 300);
  }, [openLike]);

  return (
    <motion.section
      className="min-h-[100vh] relative p-6 md:pl-0 pb-6 pt-20"
      {...fadeIn}
    >
      <div className="flex gap-4">
        <button
          className={`text-sm text-gray-500 px-4 py-2 border-[1px] border-gray-500 rounded-full w-1/2 sm:w-auto cursor-pointer ${
            !openLike ? "bg-primary-yellow text-primary-dark" : ""
          } `}
          onClick={() => setOpenLike(false)}
        >
          My Collections
        </button>
        <button
          className={`text-sm text-gray-500 px-4 py-2 border-[1px] border-gray-500 rounded-full w-1/2 sm:w-auto cursor-pointer ${
            openLike ? "bg-primary-yellow text-primary-dark" : ""
          } `}
          onClick={() => setOpenLike(true)}
        >
          Likes
        </button>
      </div>

      <div className="relative">
        {/* COLLECTION */}
        <div
          className="flex flex-col flex-wrap w-full gap-8 mt-8 sm:flex-row"
          ref={likeRef}
        >
          {data.map((song, index) => (
            <CollectionArticle key={index} {...song} />
          ))}
        </div>

        {/* LIKES */}
        {/* <div className="flex flex-col flex-wrap w-full gap-8 mt-8 sm:flex-row">
          {likes.map((song, index) => (
            <CollectionArticle key={index} {...song} />
          ))}
        </div> */}
      </div>
    </motion.section>
  );
};

export default Music;
