import seriesData from "../apis/seriesData.json";
import SeriesCard from "./SeriesCard";

const Series = () => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {seriesData.map((curr) => (
        <SeriesCard key={curr.id} currEle={curr} />
      ))}
    </ul>
  );
};

export default Series;
