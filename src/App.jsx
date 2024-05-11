import { useEffect, useState } from "react";
import ProgressBar from "./Component/ProgressBar";
function App() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setValue((prev) => prev + 1);
    }, 100);
  }, []);

  const handleReset = () => {
    setValue(0);
  };

  return (
    <>
      <ProgressBar value={value} />
      <div className="flex justify-center mt-4">
        <button
          onClick={handleReset}
          className="flex items-center h-9 border border-gray-300 overflow-hidden bg-blue-500 text-white px-4 rounded-md shadow-md hover:bg-blue-600 transition-colors duration-300"
        >
          Reset
        </button>
      </div>
    </>
  );
}

export default App;
