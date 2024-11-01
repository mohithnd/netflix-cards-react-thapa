import seriesData from "../apis/seriesData.json";
import SeriesCard from "./SeriesCard";

const Series = () => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4">
      {seriesData.map((curr) => (
        <SeriesCard key={curr.id} currEle={curr} />
      ))}
    </ul>
  );
};

export default Series;
