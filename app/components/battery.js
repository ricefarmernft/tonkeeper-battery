import { useState } from "react";

const Battery = () => {
  const [charge, setCharge] = useState(10);

  const increaseCharge = () => {
    setCharge((prevCharge) => Math.min(prevCharge + 10, 97.5)); // Ensure charge does not exceed 100%
  };

  return (
    <div className="text-center p-5 flex flex-col justify-center items-center">
      <svg
        width="100"
        height="200"
        viewBox="0 0 100 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* <!-- Battery outline --> */}
        <rect
          x="10"
          y="10"
          width="80"
          height="180"
          stroke="#d1d5db"
          strokeWidth="5"
          fill="none"
        />
        {/* <!-- Battery positive terminal --> */}
        <rect x="40" y="0" width="20" height="10" fill="#d1d5db" />
        {/* <!-- Battery charge level --> */}
        <rect
          className="charge-level"
          x="12.5"
          y={187.5 - (180 * charge) / 100}
          width="75"
          height={(180 * charge) / 100}
          fill="#45AEF5"
        />
      </svg>
      <button
        onClick={increaseCharge}
        className="mt-5 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Increase Charge
      </button>
    </div>
  );
};

export default Battery;
