import Header from "./header";
import Navbar from "./Navbar";
import PlayMusic from "./PlayMusic";
import Search from "./Search";

const Layout = ({ openNav, setOpenNav }) => {
  return (
    <>
      <Navbar />
      <Header />
      <PlayMusic />
      <Search />
    </>
  );
};

export default Layout;
