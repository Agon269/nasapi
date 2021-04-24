import React from "react";
import AsteroidCard from "./AsteroidCard";
function AestroidDisplay({ data, numOfAsteroids, setLoader }) {
  const toBeRendered = data.map((u) => {
    const temp = Object.entries(u).map(([date, data]) => {
      return <AsteroidCard key={data.id} info={data} setLoader={setLoader} />;
    });
    return temp;
  });

  return (
    <div>
      <section className="text-gray-600 body-font">
        <h1 className="text-white text-xl text-center">
          Number of asteroids found between those days are {numOfAsteroids}
        </h1>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-row flex-wrap -m-4">{toBeRendered}</div>
        </div>
      </section>
    </div>
  );
}

export default AestroidDisplay;
