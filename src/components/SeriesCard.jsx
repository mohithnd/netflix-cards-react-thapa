const SeriesCard = ({ currEle }) => {
  const { img_url, rating, name, description, genre, cast, watch_url } =
    currEle;
  const isSuperHit = rating >= 8.5;

  return (
    <li className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
      <div className="relative">
        <img src={img_url} alt={name} className="w-full h-64 object-cover" />
        <div className="absolute top-2 left-2 bg-blue-500 text-white text-sm font-bold px-2 py-1 rounded">
          {rating}
        </div>
        {isSuperHit && (
          <span className="absolute top-2 right-2 bg-green-500 text-white text-sm font-bold px-2 py-1 rounded">
            Super Hit
          </span>
        )}
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <div className="flex flex-wrap mt-2">
          {genre.map((g) => (
            <span
              key={g}
              className="bg-gray-200 text-gray-700 text-xs font-medium mr-2 px-2.5 py-0.5 rounded"
            >
              {g}
            </span>
          ))}
        </div>
        <p className="mt-2 text-gray-600">{description}</p>
        <p className="mt-1 text-gray-600">Cast: {cast.join(", ")}</p>
        <a
          href={watch_url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
        >
          Watch Now
        </a>
      </div>
    </li>
  );
};

export default SeriesCard;
