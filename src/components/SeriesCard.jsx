const SeriesCard = ({ currEle }) => {
  const { img_url, rating, name, description, genre, cast, watch_url } =
    currEle;
  const isSuperHit = rating >= 8.5;

  return (
    <li
      className={`bg-gray-800 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 ${
        isSuperHit ? "border-4 border-gradient" : ""
      }`}
    >
      <div className="relative">
        <img src={img_url} alt={name} className="w-full h-64 object-cover" />
        <div className="absolute top-0 left-0 bg-black bg-opacity-70 text-white p-2 rounded-br-lg">
          <span className="text-lg font-semibold">{rating}</span>
        </div>
        {isSuperHit && (
          <span className="absolute top-2 right-2 bg-gradient-to-r from-pink-500 to-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            Super Hit
          </span>
        )}
      </div>
      <div className="p-4">
        <h2
          className={`text-xl font-bold mb-2 ${
            isSuperHit ? "text-gradient" : "text-gray-200"
          }`}
        >
          {name}
        </h2>
        <div className="flex flex-wrap mb-2">
          {genre.map((g) => (
            <span
              key={g}
              className="bg-gradient-to-r from-blue-500 to-green-500 text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
            >
              {g}
            </span>
          ))}
        </div>
        <p className="text-gray-400 mb-4">{description}</p>
        <p className="text-gray-400 mb-4">Cast: {cast.join(", ")}</p>
        <a
          href={watch_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold py-2 px-4 rounded hover:bg-gradient-to-l hover:from-purple-600 hover:to-indigo-700 transition duration-200"
        >
          Watch Now
        </a>
      </div>
    </li>
  );
};

export default SeriesCard;
