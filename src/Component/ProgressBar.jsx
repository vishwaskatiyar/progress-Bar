import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const ProgressBar = ({ value = 0 }) => {
  const initialValue = 0;
  const [percentage, setPercentage] = useState(initialValue);

  useEffect(() => {
    setPercentage(Math.min(100, Math.max(value, initialValue)));
  }, [value]);

  return (
    <>
      <div className="text-center">Progress Bar</div>
      <div className="progress-bar flex rounded-3xl items-center h-9 w-full border border-gray-300 relative overflow-hidden">
        <div
          className="progress-bar-fill h-full bg-blue-500"
          style={{ width: `${percentage}%` }}
        >
          <span
            style={{ color: percentage > 49 ? "white" : "black" }}
            className="absolute inset-0 flex items-center justify-center w-full h-full"
          >
            {percentage}%
          </span>
        </div>
      </div>
      <div className="flex justify-center mt-4"></div>
    </>
  );
};

ProgressBar.propTypes = {
  value: PropTypes.number,
};

export default ProgressBar;
