import React from "react";

function WeatherDisplay({ info }) {
  const options = { day: "numeric", month: "long" };
  const date = info.date.toLocaleDateString(undefined, options);

  return (
    <>
      <div className="max-w-5xl mx-auto overflow-hidden border-red-900 bg-transparent border rounded-lg my-28 p-6   backdrop-filter backdrop-blur-md">
        <div className="flex justify-items-center justify-center flex-col sm:flex-row  text-white divide-red-900 divide-y sm:divide-x sm:divide-y-0">
          <div className="flex-auto px-7 py-5">
            <h2 className="text-4xl font-bold">Sol {info.sol}</h2>
            <p className="text-3xl font-light">{date}</p>
          </div>
          <div className="flex-auto px-7  py-5">
            <h2 className="text-4xl font-bold">Atmospheric Pressure</h2>
            <p>Max: {info.maxPre}pa</p>
            <p>Low: {info.minPre}pa</p>
          </div>
          <div className="flex-auto px-7  py-5">
            <h2 className="text-4xl font-bold">Temprature</h2>
            <p className="text-white text-xl">
              Max:{" "}
              {info.maxTemp !== undefined
                ? `The max tempreature in celcius is ${info.maxTemp}`
                : "No data (◕⌓◕;)"}
            </p>
            <p className="text-white text-xl">
              Min:{" "}
              {info.minTemp !== undefined
                ? `The min tempreature in celcius is ${info.minTemp}`
                : "No data (◕⌓◕;)"}
            </p>

            <p className="text-white text-xl">
              Feels like ? i dont know , we will find out soon{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default WeatherDisplay;
