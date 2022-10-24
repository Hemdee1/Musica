import { Heart } from "iconsax-react";
import { motion } from "framer-motion";
import { fadeUp } from "../utils/data";

const images = ["./images/avatar.jpg", "./images/avatar2.jpg"];

const RandB = () => {
  return (
    <section className=" ml-4 sm:ml-0 p-8 bg-[#609EAF] rounded-[30px] w-[90%] lg:w-[60%] h-[400px] flex justify-between overflow-hidden relative font-Quicksand">
      <div className="flex flex-col justify-between text-start">
        <h3 className=" text-md md:text-xl">Currated Playlist</h3>

        <div className="w-[100%] flex flex-col justify-end sm:justify-between h-[60%] z-20">
          <div className="w-[100%] mb-4">
            <h2 className="text-3xl font-extrabold mb-2">R & B Hits</h2>
            <h3 className="text-sm sm:text-lg ">
              All mine, Lie again, Petty call me everyday,
            </h3>
            <h3 className="text-sm sm:text-lg">
              Out of time, No love, Bad habit,
            </h3>
            <h3 className="text-sm sm:text-lg">And so much more.</h3>
          </div>

          <div className="flex items-center">
            <div className="flex ml-4">
              {[...images, ...images].map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt="user-avatar"
                  className="w-7 sm:w-8 rounded-full ml-[-1rem]"
                />
              ))}
            </div>
            <Heart variant="Bold" className="mx-3" />
            <h3>33K Likes</h3>
          </div>
        </div>
      </div>

      <motion.img
        {...fadeUp}
        src="./images/Pexel.png"
        alt=""
        className="hidden sm:block absolute right-0 bottom-0 h-[22rem] z-10"
      />
      <motion.img
        src="./images/Vector.png"
        className="absolute sm:right-0 right-[-5rem] sm:top-0 top-[-5rem] h-[60%] sm:h-[100%] sm:rotate-0 rotate-90"
      />
    </section>
  );
};

export default RandB;
