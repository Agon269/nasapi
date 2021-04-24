import React, { useState, useEffect } from "react";
import Nasa from "../api/Nasa";
import Landing from "../components/Landing";
import Loading from "../components/Loading";
function Home() {
  const [picOfTheDay, setpicOfTheDay] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      const { data } = await Nasa.get("/planetary/apod?");

      setpicOfTheDay(data);
    }
    fetchData();
  }, []);
  const setLoader = (bool) => {
    setLoading(bool);
  };

  return (
    <>
      {loading === true ? <Loading /> : ""}
      {picOfTheDay === null ? (
        ""
      ) : (
        <Landing info={picOfTheDay} setLoader={setLoader} />
      )}
    </>
  );
}

export default Home;
