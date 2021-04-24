import React from "react";

function WeatherCardItem({ info, handleWeatherClick }) {
  const options = { day: "numeric", month: "long" };
  const date = info.date.toLocaleDateString(undefined, options);
  function clickHandler() {
    handleWeatherClick(info);
  }

  return (
    <div className="p-4 lg:w-1/3 2xl:w-1/3 w-full ">
      <div
        onClick={clickHandler}
        className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative  hover: cursor-pointer  transition duration-500 ease-in-out  hover:bg-red-900 hover:opacity-60 transform hover:-translate-y-1 hover:scale-100"
      >
        <h1 className="tracking-widest text-xl-5 title-font font-medium text-gray-600 mb-1">
          SOL {info.sol}
        </h1>
        <p className="leading-relaxed mb-3">{date}</p>
      </div>
    </div>
  );
}

export default WeatherCardItem;
