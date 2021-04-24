import React from "react";
import WeatherCard from "./WeatherCardItem";

function WeatherCardList({ data, handleWeatherClick }) {
  const render = () => {
    return data.map((day) => {
      return (
        <WeatherCard
          info={day}
          key={day.sol}
          handleWeatherClick={handleWeatherClick}
        />
      );
    });
  };
  return (
    <div>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-row flex-wrap -m-4">{render()}</div>
      </div>
    </div>
  );
}

export default WeatherCardList;
