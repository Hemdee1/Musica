import { createContext, useContext, useState } from "react";

const Appcontext = createContext();

const AppProvider = ({ children }) => {
  // FOR NAVIGATION
  const [openNav, setOpenNav] = useState(false);

  const toggleNav = () => {
    setOpenNav((prev) => !prev);
  };

  const closeNav = () => {
    if (!openNav) return;
    setOpenNav(false);
  };

  // FOR VOLUME AND FORWARD
  const [forward, setForward] = useState(0);
  const [volume, setVolume] = useState(0);

  const handleChange = (e, active) => {
    const target = e.target;
    const value = target.value;

    target.style.backgroundSize = value + "% 100%";

    active == "forward" ? setForward(value) : setVolume(value);
  };

  return (
    <Appcontext.Provider
      value={{ openNav, toggleNav, closeNav, forward, volume, handleChange }}
    >
      {children}
    </Appcontext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(Appcontext);
};

export default AppProvider;
