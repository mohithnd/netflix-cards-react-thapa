import Series from "./components/Series";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 to-blue-500 flex flex-col items-center">
      <header className="text-center p-8 bg-white bg-opacity-80 rounded-lg shadow-lg mt-10">
        <h1 className="text-3xl font-bold text-gray-800">
          Best Netflix Series
        </h1>
        <p className="mt-2 text-gray-600">
          Explore our curated list of top-rated series
        </p>
      </header>
      <Series />
    </div>
  );
};

export default App;
