import { NavLink } from "react-router-dom";
import {
  Home3,
  Radio,
  MusicLibrary2,
  VideoHorizontal,
  Profile,
  LogoutCurve,
} from "iconsax-react";
import { useGlobalContext } from "../context/context";

const Navbar = () => {
  const { openNav, closeNav } = useGlobalContext();

  const handleLogout = () => {
    closeNav();
    console.log("logged out");
  };

  return (
    <>
      {/* hidden sm:flex */}
      <nav
        className={`fixed top-0 left-0 w-60 sm:w-28 h-[100%] bg-primary-dark items-center flex-col z-30 translate-x-[-100%] sm:translate-x-[0] transition-all ${
          openNav ? "translate-x-[0]" : ""
        }`}
      >
        {/* First Nav */}
        <div className=" flex justify-center items-start sm:items-center flex-col p-4 py-6 rounded-[55px] mt-20 ">
          <NavLink
            onClick={closeNav}
            to="home"
            className={({ isActive }) =>
              ` mb-8 text-white flex ${
                isActive ? "text-primary-yellow opacity-100" : ""
              }`
            }
          >
            <Home3 variant="Bold" size="27" />
            <h1 className="font-bold ml-8 sm:hidden">Home</h1>
          </NavLink>

          <NavLink
            onClick={closeNav}
            to="music"
            className={({ isActive }) =>
              ` mb-8 text-white flex ${
                isActive ? "text-primary-yellow opacity-100" : ""
              }`
            }
          >
            <MusicLibrary2 variant="Bold" size="27" />
            <h1 className="font-bold ml-8 sm:hidden">My Collections</h1>
          </NavLink>

          <NavLink
            onClick={closeNav}
            to="radio"
            className={({ isActive }) =>
              ` mb-8 text-white flex ${
                isActive ? "text-primary-yellow opacity-100" : ""
              }`
            }
          >
            <Radio variant="Bold" size="27" />
            <h1 className="font-bold ml-8 sm:hidden">Radio</h1>
          </NavLink>

          <NavLink
            onClick={closeNav}
            to="video"
            className={({ isActive }) =>
              ` mb-8 text-white flex ${
                isActive ? "text-primary-yellow opacity-100" : ""
              }`
            }
          >
            <VideoHorizontal variant="Bold" size="27" />
            <h1 className="font-bold ml-8 sm:hidden">Music Video</h1>
          </NavLink>
        </div>

        {/* Second Nav */}
        <div className="flex justify-center items-start sm:items-center flex-col p-4 py-6 rounded-[55px] mt-0 sm:mt-10 ">
          <NavLink
            onClick={closeNav}
            to="profile"
            className={({ isActive }) =>
              ` mb-8 text-white flex ${
                isActive ? "text-primary-yellow opacity-100" : ""
              }`
            }
          >
            <Profile variant="Bold" size="27" />
            <h1 className="font-bold ml-8 sm:hidden">Profile</h1>
          </NavLink>

          <button onClick={handleLogout} className=" mb-8 text-white flex ">
            <LogoutCurve variant="Bold" size="27" className=" rotate-180" />
            <h1 className="font-bold ml-8 sm:hidden">Logout</h1>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
