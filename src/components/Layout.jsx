import Header from "./header";
import Navbar from "./Navbar";
import PlayMusic from "./PlayMusic";

const Layout = ({ openNav, setOpenNav }) => {
  return (
    <>
      <Navbar />
      <Header />
      <PlayMusic />
    </>
  );
};

export default Layout;
