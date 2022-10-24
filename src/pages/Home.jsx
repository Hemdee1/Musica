import ChartArticle from "../components/chartArticle";
import RandB from "../components/R&B-Hero";
import SongArticle from "../components/songArticle";
import { datas, songs, fadeIn } from "../utils/data";
import { motion } from "framer-motion";
import { useGlobalContext } from "../context/context";

const Home = () => {
  const { newMusics, popularMusics, playlists } = useGlobalContext();

  return (
    <motion.div className="pt-20 pl-0 pr-0 sm:pr-8 sm:pl-4" {...fadeIn}>
      {/* HERO IMAGE */}
      <div className="flex flex-col gap-8 lg:flex-row">
        {/* R & B */}
        <RandB />

        {/* TOP CHARTS */}
        <section className=" w-[100%] lg:w-[40%] ">
          <h1 className="ml-4 text-xl font-bold text-start">Top Charts</h1>

          <div className="flex flex-row lg:flex-col py-3 px-3 pb-4 gap-3 overflow-x-scroll lg:overflow-x-hidden transition-all overflow-y-hidden lg:overflow-y-scroll h-auto lg:h-[25rem]  scrollbar">
            {playlists.map((data, index) => (
              <ChartArticle data={data} key={index} />
            ))}
          </div>
        </section>
      </div>

      {/* NEW RELEASES */}
      <div className="mt-6">
        <h1 className="px-4 mb-4 text-xl font-bold text-start sm:px-0">
          New Releases
        </h1>
        <div className="flex gap-8 px-4 pb-4 mt-4 overflow-x-scroll sm:px-0 scrollbar">
          {newMusics.map((song, index) => (
            <SongArticle key={index} {...song} />
          ))}
        </div>
      </div>

      {/* POPULAR RELEASES */}
      <div className="mt-6">
        <h1 className="px-4 mb-4 text-xl font-bold text-start sm:px-0">
          Popular in your Area
        </h1>
        <div className="flex gap-8 px-4 pb-4 mt-4 overflow-x-scroll sm:px-0 scrollbar">
          {popularMusics.map((song, index) => (
            <SongArticle key={index} {...song} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
