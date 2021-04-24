import React from "react";

function BrowserLocation({ setLoader, submitHandler }) {
  const successHandler = ({ coords }) => {
    const loc = {
      lon: coords.longitude,
      lat: coords.latitude,
    };
    submitHandler(loc);
  };
  //error handler when browser refuses to give location
  const errorHandler = (err) => {
    alert(err.message);
  };
  //geolocation through browser
  const geolocation = (e) => {
    e.preventDefault();
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
    } else {
      navigator.geolocation.getCurrentPosition(successHandler, errorHandler);
    }
  };
  return (
    <div>
      <button
        onClick={geolocation}
        className="block w-72 px-6 py-2 text-2xl font-medium leading-6 text-center text-white  transition bg-gray-600 rounded shadow ripple hover:shadow-lg  focus:outline-none "
      >
        Get browser location
      </button>
    </div>
  );
}

export default BrowserLocation;
