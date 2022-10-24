import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Music from "./pages/Music";
import Radio from "./pages/Radio";
import Video from "./pages/Video";
import Album from "./pages/Album";
import Profile from "./pages/Profile";
import Logout from "./pages/Logout";
import Layout from "./components/Layout";
import { AnimatePresence } from "framer-motion";
import { useGlobalContext } from "./context/context";

function App() {
  const location = useLocation();
  const { closeNav } = useGlobalContext();

  return (
    <div className=" bg-primary-dark text-white font-Quicksand min-h-[100vh]">
      <Layout />
      {/* Routes */}
      <div className="sm:ml-28 pb-28" onClick={closeNav}>
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route index path="/home" element={<Home hello={"hello"} />} />
            <Route path="/music" element={<Music />} />
            <Route path="/radio" element={<Radio />} />
            <Route path="/video" element={<Video />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/album/:id" element={<Album />} />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
