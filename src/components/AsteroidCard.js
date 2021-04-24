import React, { useEffect } from "react";

function AsteroidCard({ info, setLoader }) {
  useEffect(() => {
    setLoader(false);
  }, [setLoader]);
  return (
    <div className="p-4 lg:w-1/3 sm:w-100">
      <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
        <h2 className="tracking-widest text-xs title-font font-medium text-gray-600 mb-1">
          {info.id}
        </h2>
        <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
          {info.name}
        </h1>
        <p className="leading-relaxed mb-3">
          It is a {info.hazard === true ? "hazardous" : "non-hazardous"}
        </p>
        <p className="leading-relaxed mb-3">
          It is {info.approach} kilometers close to the earth
        </p>
        <p className="leading-relaxed mb-3">
          Estimated min diameters: {info.diameters.estimated_diameter_min}{" "}
          kilometers
        </p>
        <p className="leading-relaxed mb-3">
          Estimated max diameters: {info.diameters.estimated_diameter_max}{" "}
          kilometers
        </p>
        <a
          className="text-indigo-500 inline-flex items-center"
          rel="noopener noreferrer"
          target="_blank"
          href={info.url}
        >
          Learn More
          <svg
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default AsteroidCard;
