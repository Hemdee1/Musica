import { Play } from "iconsax-react";

const CollectionArticle = ({ image, title, artist }) => {
  return (
    <article className="relative rounded-2xl  overflow-hidden collection">
      <img
        src={image}
        alt="album cover"
        className="w-[100%] h-[45vh] sm:h-60 sm:w-56 object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 pl-4 pb-4 translate-y-[40%] transition-all cont">
        <h2 className="text-xl font-bold">{title}</h2>
        <h3 className="text-sm text-gray-300">{artist}</h3>
        <h3 className="mt-8">2.3m likes</h3>
        <div className="shadow-me absolute bottom-[-3rem] left-[-1rem] w-[120%] z-[-1]">
          -
        </div>
      </div>
      <div className="ml-4 sm:ml-10 cursor-pointer p-2 rounded-full bg-primary-yellow w-10 absolute right-4 bottom-4 opacity-0 icon">
        <Play variant="Bold" size="24" />
      </div>
    </article>
  );
};

export default CollectionArticle;
