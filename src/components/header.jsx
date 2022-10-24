import { SearchNormal1 } from "iconsax-react";
import { useState } from "react";
import { useGlobalContext } from "../context/context";

const Header = () => {
  const { toggleNav, searchMusic } = useGlobalContext();
  const [data, setData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    searchMusic(data);
  };

  return (
    <header className="fixed top-0 left-0 w-[100%] z-50 py-3 px-5 sm:px-10 flex items-center bg-primary-dark bg-opacity-90 backdrop-blur-md ">
      {/* bg-primary-dark bg-opacity-90 */}
      <div className="flex items-center mr-20 sm:mr-28">
        <div className="mr-4 cursor-pointer sm:hidden" onClick={toggleNav}>
          <div className="w-5 h-[2px] bg-white"></div>
          <div className="w-5 h-[2px] mt-1 bg-white"></div>
          <div className="w-5 h-[2px] mt-1 bg-white"></div>
        </div>
        <img src="/images/logo.png" alt="" />
      </div>

      {/* SEARCH BOX */}
      <form
        className=" w-52 bg-[#1a1a1a] flex items-center p-1 rounded-3xl relative"
        onSubmit={handleSubmit}
      >
        <SearchNormal1
          color="gray"
          size="20"
          className="absolute left-2 top-2"
        />
        <input
          type="search"
          placeholder="Search"
          className="w-40 p-1 ml-10 bg-transparent outline-none placeholder:text-gray-500"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
      </form>
    </header>
  );
};

export default Header;
