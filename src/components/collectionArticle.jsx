import { ArrangeVerticalSquare, Play } from "iconsax-react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/context";
const artist = "No artist";

const CollectionArticle = ({ cover, title, id }) => {
  const { selectMusic } = useGlobalContext();

  return (
    <article className="relative overflow-hidden rounded-2xl collection">
      <Link to={"/album/" + id}>
        <img
          src={cover}
          alt="album cover"
          className="w-[100%] h-[45vh] sm:h-60 sm:w-56 object-cover object-top"
        />
      </Link>
      <div className="absolute bottom-0 left-0 right-0 pl-4 pb-4 sm:translate-y-[40%] translate-y-0 transition-all cont">
        <h2 className="text-xl font-bold">{title}</h2>
        <h3 className="text-sm text-gray-300">{artist}</h3>
        <h3 className="mt-8">2.3m likes</h3>
        <div className="shadow-me absolute bottom-[-3rem] left-[-1rem] w-[120%] z-[-1]">
          -
        </div>
      </div>
      <div className="absolute w-10 p-2 ml-4 rounded-full opacity-100 cursor-pointer sm:ml-10 bg-primary-yellow right-4 bottom-4 sm:opacity-0 icon">
        <Play
          variant="Bold"
          size="24"
          onClick={() => selectMusic("play-1", id)}
        />
      </div>
    </article>
  );
};

export default CollectionArticle;
