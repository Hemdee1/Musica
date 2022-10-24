import { Heart } from "iconsax-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/context";

const ChartArticle = ({ data }) => {
  const { id, title, cover, files, info } = data;
  const { addToLikes, likes } = useGlobalContext();

  const [alreadyLike, setAlreadyLike] = useState(
    likes.find((like) => like.id === id)
  );

  const handleLikes = () => {
    addToLikes(data);
    setAlreadyLike((prev) => !prev);
  };

  const totalMin = files?.reduce((total, file) => {
    const duration = +file?.duration.split(":")[0];
    total += duration;
    return total;
  }, 0);

  const totalSec = files?.reduce((total, file) => {
    const duration = +file?.duration.split(":")[1];
    total += duration;
    return total % 60;
  }, 0);

  return (
    <article className="h-60 lg:h-28 min-w-[270px] md:min-w-[320px] p-4 relative bg-black bg-opacity-30 flex gap-4 rounded-2xl flex-col lg:flex-row">
      <Link
        to={"/album/" + id}
        className="h-[60%] lg:h-auto w-[180px] lg:w-1/4"
      >
        <img
          src={cover}
          alt=""
          className="object-cover object-top w-full h-full rounded-xl"
        />
      </Link>
      <div className="w-[100%] lg:w-[60%] text-start flex flex-col gap-1 justify-center">
        <Link to={"/album/" + id} className="font-medium text-md">
          {title}
        </Link>
        <p className="text-xs text-gray-400">{info.slice(0, 35)}...</p>
        <h3 className="mt-2 text-sm lg:mt-0">
          {totalMin}: {totalSec}
        </h3>
      </div>
      <div className="absolute flex items-center justify-center w-1/5 text-primary-yellow top-3 right-3 lg:relative lg:top-0 lg:right-0">
        <button
          className="p-2 border-[1px] rounded-full border-gray-500 transition-all active:scale-125"
          onClick={handleLikes}
        >
          {alreadyLike ? (
            <Heart variant="Bold" size="20" className="text-red-500" />
          ) : (
            <Heart size="20" />
          )}
        </button>
      </div>
    </article>
  );
};

export default ChartArticle;
