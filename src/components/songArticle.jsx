const SongArticle = ({ image, title, artist }) => {
  return (
    <article className="min-w-[10rem] text-start">
      <img
        src={image}
        alt=""
        className="w-[100%]  h-40 object-cover rounded-3xl"
      />
      <h2 className="text-md">{title}</h2>
      <h3 className="text-sm text-gray-400">{artist}</h3>
    </article>
  );
};

export default SongArticle;
