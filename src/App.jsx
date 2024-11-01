import Series from "./components/Series";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 flex flex-col items-center justify-center p-6">
      <header className="mb-10 text-center">
        <h1 className="text-5xl font-extrabold text-gradient">
          Best Netflix Series
        </h1>
        <p className="text-gray-400 mt-2">
          Explore our curated list of top-rated series
        </p>
      </header>
      <Series />
    </div>
  );
};

export default App;
