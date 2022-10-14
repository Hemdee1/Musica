import { fadeIn } from "../utils/data";
import { motion } from "framer-motion";

const Profile = () => {
  return (
    <motion.section
      className="min-h-[100vh] flex justify-center items-center"
      {...fadeIn}
    >
      <h1 className="text-3xl font-extrabold">Logout Page</h1>
    </motion.section>
  );
};

export default Profile;
