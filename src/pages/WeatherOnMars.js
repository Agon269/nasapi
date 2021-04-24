import React, { useEffect, useState } from "react";
import WeatherCardList from "../components/WeatherCardList";
import WeatherDisplay from "../components/WeatherDisplay";
import Nasa from "../api/Nasa";
import Loading from "../components/Loading";

function WeatherOnMars() {
  const [weather, setWeather] = useState("");
  const [selectedWeather, setSelectedWeather] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const { data } = await Nasa.get("/insight_weather/", {
        params: {
          ver: 1.0,
          feedtype: "json",
        },
      });
      const { sol_keys, validity_checks, ...solData } = data;
      const temp = Object.entries(solData).map(([sol, data]) => {
        return {
          sol,
          maxTemp: data?.AT?.mx,
          minTemp: data?.AT?.mn,
          windSpeed: data?.HWS?.av,
          maxPre: data?.PRE?.mx,
          minPre: data?.PRE?.mn,
          date: new Date(data.First_UTC),
        };
      });

      setWeather(temp);
      setSelectedWeather(temp[0]);
    }
    fetchData();
  }, []);

  function handleWeatherClick(selected) {
    setSelectedWeather(selected);
  }
  function render() {
    if (selectedWeather == null) {
      return <Loading />;
    } else {
      return (
        <>
          <div className="container mx-auto flex px-10 lg:px-40 py-10 -mb-32 items-left justify-start flex-col">
            <div className="text-left lg:w-2/3 w-full">
              <p className="text-base text-white">
                NASA’s InSight Mars lander takes continuous weather measurements
                (temperature, wind, pressure) on the surface of Mars at Elysium
                Planitia, a flat, smooth plain near Mars’ equator. Please note
                that there are sometimes problems with the sensors on Mars that
                result in missing data! If you see a long gap, a search result
                may bring up more information on whether it is a long-lasting
                problem. Summaries of these data are available.
                <a
                  className="text-xl text-blue-500 hover:text-blue-600"
                  target="_blank"
                  href=" https://mars.nasa.gov/insight/weather/."
                  rel="noreferrer"
                >
                  {" "}
                  here
                </a>
              </p>
            </div>
          </div>

          <WeatherDisplay info={selectedWeather} />
          <WeatherCardList
            data={weather}
            handleWeatherClick={handleWeatherClick}
          />
        </>
      );
    }
  }

  return render();
}

export default WeatherOnMars;
