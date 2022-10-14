import {
  Next,
  Play,
  Previous,
  RepeateOne,
  Shuffle,
  VolumeHigh,
} from "iconsax-react";
import { motion } from "framer-motion";
import { fadeUp } from "../utils/data";
import { useGlobalContext } from "../context/context";

const PlayMusic = () => {
  const { volume, forward, handleChange } = useGlobalContext();

  return (
    <motion.section
      className="fixed bottom-0 left-0 w-[100%] h-24 z-40 bg-black bg-opacity-10 backdrop-blur-lg  border-t-[1px] border-gray-500 pl-[3%] lg:pl-[8%] pr-[3%] flex items-center play"
      {...fadeUp}
    >
      {/* info */}
      <div className="flex w-[100%] sm:w-[30%] lg:w-[20%]">
        <img
          src="./images/Rectangle 21.png"
          alt="album cover"
          className="h-14 rounded-xl"
        />
        <div className="ml-4 text-start flex flex-col justify-center">
          <h2 className="text-md font-extrabold">Call of Duty</h2>
          <h3 className="text-sm text-gray-400">Zinoleesky</h3>
        </div>
      </div>

      {/* control */}
      <div className="flex  w-[60%] items-center justify-center flex-col">
        <div className="flex items-center">
          <Shuffle
            variant="Bold"
            className="ml-10 cursor-pointer hidden sm:block"
            size="20"
          />
          <Previous
            variant="Bold"
            className="ml-4 sm:ml-10 cursor-pointer"
            size="20"
          />
          <div className="ml-4 sm:ml-10 cursor-pointer p-2 rounded-full bg-primary-yellow ">
            <Play variant="Bold" size="20" />
          </div>
          <Next
            variant="Bold"
            className="ml-4 sm:ml-10 cursor-pointer"
            size="20"
          />
          <RepeateOne
            variant="Bold"
            className="ml-10 cursor-pointer hidden sm:block"
            size="20"
          />
        </div>
        {/* forward button */}
        <input
          type="range"
          className="mt-4 hidden sm:block"
          value={forward}
          onChange={(e) => handleChange(e, "forward")}
        />
      </div>

      {/* volume */}
      <div className=" w-[20%] items-center ml-4 hidden sm:flex">
        <VolumeHigh />
        <input
          type="range"
          className="ml-4 volume"
          value={volume}
          onChange={(e) => handleChange(e, "volume")}
        />
      </div>
    </motion.section>
  );
};

export default PlayMusic;
