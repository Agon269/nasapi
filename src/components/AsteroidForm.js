import React, { useState } from "react";
import Input from "./Input";
function AestroidForm({ submitHandler, setLoader }) {
  const [params, setParams] = useState({
    start_date: "",
    end_date: "",
  });
  const onChangeHandler = ({ target }) => {
    setParams((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };
  const formSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    submitHandler(params);
  };
  return (
    <div>
      <form onSubmit={formSubmit}>
        <div className="max-w-5xl mx-auto overflow-hidden  bg-transparent rounded-lg my-28 p-6">
          <div className="bg-black shadow rounded-lg p-6">
            <h2 className="text-white text-2xl ">
              {" "}
              NeoWs (Near Earth Object Web Service)
            </h2>
            <p className="text-white">
              ⚠ Please enter the start and end date to see any recorded near
              earth objects with in those days , maximum 7 day range
            </p>
            <div className="grid lg:grid-cols-2 gap-6 text-white">
              <div>
                <Input
                  label="Start date"
                  name="start_date"
                  type="date"
                  onChangeHandler={onChangeHandler}
                  value={params.start_date}
                />
              </div>
              <div>
                <Input
                  label="End date"
                  name="end_date"
                  type="date"
                  onChangeHandler={onChangeHandler}
                  value={params.end_date}
                />
              </div>
            </div>
            <div className="pt-4 flex flex-col items-center justify-spacebetween ">
              <button
                type="submit"
                className="block w-72 px-6 py-2 text-2xl leading-6 text-center text-white  transition border-2 border-gray-600 rounded shadow ripple hover:shadow-lg hover:bg-gray-600 focus:outline-none mt-8"
              >
                Find
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AestroidForm;
