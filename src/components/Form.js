import React, { useState } from "react";
import Input from "./Input";
import BrowserLocation from "./BrowserLocation";

function Form({ submitHandler, setLoader }) {
  //state for form
  const [params, setParams] = useState({
    lon: "",
    lat: "",
    date: "",
  });

  //on change handler to set params with form data
  const onChangeHandler = ({ target }) => {
    setParams((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };
  //when form is submitted send the function back also start loader
  const formSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    submitHandler(params);
  };
  //when browser lcation function is applied
  const submitBrowserLocation = (values) => {
    setLoader(true);
    submitHandler(values);
  };
  return (
    <form onSubmit={formSubmit}>
      <div className="max-w-5xl mx-auto overflow-hidden  bg-transparent rounded-lg my-28 p-6">
        <div className="bg-black shadow rounded-lg p-6">
          <h2 className="text-white text-2xl ">Satellite Image Finder</h2>

          <p className="text-white">
            ⚠ Please enter longitude and latitude, if you dont prefer either
            press get browser location to use your own location. if you do not
            provide date latest date will be displayed.
          </p>

          <div className="grid lg:grid-cols-2 gap-6 text-white">
            <Input
              type="text"
              placeholder="longitude"
              label="longitude"
              name="lon"
              value={params.lon}
              onChangeHandler={onChangeHandler}
            />
            <Input
              type="text"
              placeholder="latitude"
              label="latitude"
              name="lat"
              value={params.lat}
              onChangeHandler={onChangeHandler}
            />
            <Input
              type="date"
              label="Date"
              name="date"
              value={params.date}
              onChangeHandler={onChangeHandler}
            />
          </div>
          <div className="pt-4 flex flex-col items-center justify-spacebetween ">
            <button
              type="submit"
              className="block w-72 px-6 py-2 text-2xl leading-6 text-center text-white  transition border-2 border-gray-600 rounded shadow ripple hover:shadow-lg hover:bg-gray-600 focus:outline-none mb-8"
            >
              Find
            </button>
            <BrowserLocation
              setLoader={setLoader}
              submitHandler={submitBrowserLocation}
            />
          </div>
        </div>
      </div>
    </form>
  );
}

export default Form;
