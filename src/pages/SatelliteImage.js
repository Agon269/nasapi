import React, { useState } from "react";
import Form from "../components/Form";
import Image from "../components/Image";
import Nasa from "../api/Nasa";
import Loading from "../components/Loading";
import ErrorModal from "../components/ErrorModal";

function SateliteImage() {
  const [satPic, setSatPic] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const setLoader = (bool) => {
    setLoading(bool);
  };
  const submitHandler = async (param) => {
    let newDate;
    //if date is emty set latest date
    if (param.date === "") {
      const dateObj = new Date();
      const month = dateObj.getUTCMonth() + 1;
      const day = dateObj.getUTCDate();
      const year = dateObj.getUTCFullYear();
      newDate = year + "-" + month + "-" + day;
    } else {
      newDate = param.date;
    }
    try {
      const { data } = await Nasa.get("/planetary/earth/assets?", {
        params: {
          lon: param.lon,
          lat: param.lat,
          date: newDate,
          dim: 0.1,
        },
      });

      setSatPic(data.url);
    } catch (err) {
      setIsError(true);
    }
  };
  //when image loads it sets the loader off
  const loaded = (bool) => {
    setLoading(bool);
  };
  const closeError = (bool) => {
    setIsError(bool);
  };
  const errors = [
    "make sure you have entered proper date",
    "Your longitude and latitude numbers are wrong",
  ];
  return (
    <div>
      <div className="container mx-auto flex px-10 lg:px-40 py-10 -mb-32 items-left justify-start flex-col">
        <div className="text-left lg:w-2/3 w-full">
          <p className="text-base text-white">
            Earth Landsat imagery is provided to the public as a joint project
            between NASA and USGS. A recent industry report on landsat satellite
            imagery data estimates that total annual value to the economy of
            $2.19 billion, far exceeding the multi-year total cost of building,
            launching, and managing Landsat satellites and sensors. The value is
            derived from consumer use of the data. The objective of this
            endpoint is to give you an easy to use taste of what Landsat imagery
            data can provide. There are more complicate APIs available if you
            want to build models on top of satellite imagery, apply
            machine-learning, or minimize clouds in your image. NASA's Earth
            Science Devision has a variety of Earth imagery APIs for developers,
            which you can find out about in the Earthdata Developer Portal.
          </p>
        </div>
      </div>
      <Form submitHandler={submitHandler} setLoader={setLoader} />
      {loading === true ? <Loading /> : ""}
      {isError !== false ? (
        <ErrorModal loaded={loaded} close={closeError} errors={errors} />
      ) : (
        ""
      )}
      <div style={{ display: loading ? "none" : "block" }}>
        <Image source={satPic} loaded={loaded} />
      </div>
    </div>
  );
}

export default SateliteImage;
