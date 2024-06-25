import { useState } from "react";

const Battery = () => {
  const [charge, setCharge] = useState(10);

  const increaseCharge = (amount) => {
    setCharge((prevCharge) => Math.min(prevCharge + amount, 97.5)); // Ensure charge does not exceed 100%
  };

  const decreaseCharge = (amount) => {
    setCharge((prevCharge) => Math.max(prevCharge - amount, 2.5)); // Ensure charge does not go below 0%
  };

  return (
    <>
      {/* <div>{charge === 2.5 ? charge - 2.5 : charge}</div> */}
      <div className=" columns-3xs text-center items-center justify-between flex mx-6">
        <div className="h-full w-full flex flex-col gap-6 ">
          <button
            onClick={() => increaseCharge(25)}
            className="recharge-button"
          >
            Recharge (Lg)
          </button>
          <button
            onClick={() => increaseCharge(12)}
            className="recharge-button"
          >
            Recharge (Med)
          </button>
          <button onClick={() => increaseCharge(5)} className="recharge-button">
            Recharge (Sm)
          </button>
        </div>
        <div className="w-full flex justify-center">
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
        </div>
        <div className="h-full w-full flex flex-col gap-6 ">
          <button onClick={() => decreaseCharge(20)} className="battery-button">
            Swap Tokens
          </button>
          <button onClick={() => decreaseCharge(6)} className="battery-button">
            Transfer Token
          </button>
          <button onClick={() => decreaseCharge(3)} className="battery-button">
            Transfer NFT
          </button>
        </div>
      </div>
    </>
  );
};

export default Battery;
