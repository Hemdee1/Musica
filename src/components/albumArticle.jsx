import { Heart, More } from "iconsax-react";

const AlbumArticle = ({ image, title, artist, album, duration }) => {
  return (
    <article className="flex justify-between items-center h-16 z-10 rounded-lg pl-2 bg-[#33373b5e] backdrop-blur-md">
      <div className="flex items-center gap-4 flex-[1.5]">
        <img src={image} className="w-12 h-12 rounded-lg" />
        <Heart className="text-primary-yellow hidden md:block" />
      </div>
      <div className="flex-[4] flex flex-col md:flex-row justify-between md:mr-10">
        <h3 className="text-xs sm:text-sm flex-[1]">
          {title} - {artist}
        </h3>
        <div className="flex-[1]">
          <h3 className="text-xs sm:text-sm text-start md:text-center mt-1 md:mt-0">
            {album}
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
    </article>
  );
};

export default AlbumArticle;
