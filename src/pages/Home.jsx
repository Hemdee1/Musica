import ChartArticle from "../components/chartArticle";
import RandB from "../components/R&B-Hero";
import SongArticle from "../components/songArticle";
import { datas, songs, fadeIn } from "../utils/data";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div className="pt-20 pr-0 sm:pr-8 pl-0 sm:pl-4" {...fadeIn}>
      {/* HERO IMAGE */}
      <div className="flex-col lg:flex-row flex gap-8">
        {/* R & B */}
        <RandB />

        {/* TOP CHARTS */}
        <section className=" w-[100%] lg:w-[40%] ">
          <h1 className="text-xl font-bold mb-4 text-start px-4 sm:px-0">
            Top Charts
          </h1>

          <div className="flex flex-row lg:flex-col py-2 lg:py-0 pb-4 gap-3 lg:gap-2 overflow-x-scroll lg:overflow-auto scrollbar px-4 sm:px-0">
            {datas.map((data, index) => (
              <ChartArticle {...data} index={index} key={index} />
            ))}
          </div>
        </section>
      </div>

      {/* NEW RELEASES */}
      <div className="mt-6">
        <h1 className="text-xl font-bold mb-4 text-start px-4 sm:px-0">
          New Releases
        </h1>
        <div className="mt-4 flex gap-8 overflow-x-scroll px-4 sm:px-0 pb-4 scrollbar">
          {songs.map((song, index) => (
            <SongArticle key={index} {...song} />
          ))}
        </div>
      </div>

      {/* POPULAR RELEASES */}
      <div className="mt-6">
        <h1 className="text-xl font-bold mb-4 text-start px-4 sm:px-0">
          Popular in your Area
        </h1>
        <div className="mt-4 flex gap-8 overflow-x-scroll px-4 sm:px-0 pb-4 scrollbar">
          {songs.reverse().map((song, index) => (
            <SongArticle key={index} {...song} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
