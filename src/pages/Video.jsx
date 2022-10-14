import { fadeIn } from "../utils/data";
import { motion } from "framer-motion";

const Video = () => {
  return (
    <motion.section
      className="min-h-[100vh] flex justify-center items-center"
      {...fadeIn}
    >
      <h1 className="text-3xl font-extrabold">Video Page</h1>
    </motion.section>
  );
};

export default Video;
