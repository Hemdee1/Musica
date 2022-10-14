import { Heart } from "iconsax-react";
import { Link } from "react-router-dom";

// type ChatArticleProps = {
//   name: String,
//   artiste: String,
//   duration: String,
// };

const ChartArticle = ({ index, name, artist, duration, image }) => {
  return (
    <Link to={"album/" + index}>
      <article className="h-60 lg:h-auto min-w-[270px] md:min-w-[320px] p-4 relative bg-black bg-opacity-30 flex gap-4 rounded-2xl flex-col lg:flex-row">
        <img
          src={image}
          alt=""
          className="h-[50%] lg:h-auto w-[180px] lg:w-1/5 rounded-xl object-cover"
        />
        <div className="w-[100%] lg:w-[60%] text-start flex flex-col gap-1 justify-center">
          <h3 className="text-md font-medium">{name}</h3>
          <p className="text-xs text-gray-400">{artist}</p>
          <h3 className="text-sm mt-5 lg:mt-0">{duration}</h3>
        </div>
        <div className="w-1/5 flex justify-center items-center text-primary-yellow absolute top-3 right-3 lg:relative lg:top-0 lg:right-0">
          <button className="p-2 border-[1px] rounded-full border-gray-500">
            <Heart size="20" />
          </button>
        </div>
      </article>
    </Link>
  );
};

export default ChartArticle;
