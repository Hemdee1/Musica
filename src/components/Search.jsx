import { CloseCircle } from "iconsax-react";
import { useGlobalContext } from "../context/context";
import SongArticle from "./songArticle";

const Search = () => {
  const { searchData, openSearch, closeSearch } = useGlobalContext();

  if (searchData.length < 1) {
    return (
      <section
        className={`search fixed bottom-0 right-0 z-30 w-full h-full bg-primary-dark pb-28 transition-all translate-y-full ${
          openSearch ? "translate-y-[0]" : ""
        }`}
      >
        <button onClick={closeSearch}>
          <CloseCircle
            className="absolute text-4xl rounded-full top-20 right-5 md:right-16 text-primary-yellow"
            size="35"
          />
        </button>

        <div className="flex flex-wrap justify-center w-full gap-8 px-8 py-20 mt-4">
          <h3>There is no match music for your search</h3>
        </div>
      </section>
    );
  }

  return (
    <section
      className={`search fixed bottom-0 right-0 z-30 w-full h-full bg-primary-dark pb-28 transition-all translate-y-full ${
        openSearch ? "translate-y-[0]" : ""
      }`}
    >
      <button onClick={closeSearch}>
        <CloseCircle
          className="absolute text-4xl rounded-full top-20 right-5 md:right-16 text-primary-yellow"
          size="35"
        />
      </button>

      <div className="flex flex-wrap justify-center gap-4 px-2 py-20 mt-4 sm:gap-8 sm:px-8">
        {searchData.map((song, index) => (
          <SongArticle key={index} {...song} />
        ))}
      </div>
    </section>
  );
};

export default Search;
