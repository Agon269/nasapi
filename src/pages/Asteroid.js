import React, { useState } from "react";
import Nasa from "../api/Nasa";
import AestroidDisplay from "../components/AsteroidDisplay";
import AestroidForm from "../components/AsteroidForm";
import Loading from "../components/Loading";
import ErrorModal from "../components/ErrorModal";
function Aestroid() {
  const [loading, setLoading] = useState(false);
  const [aestroids, setAestroids] = useState(null);
  const [numOfAsteroids, setNumOfAsteroids] = useState(0);
  const [isError, setIsError] = useState(false);

  const submitHandler = async (params) => {
    try {
      const { data } = await Nasa.get("/neo/rest/v1/feed?", {
        params: {
          start_date: params.start_date,
          end_date: params.end_date,
        },
      });
      const { element_count, near_earth_objects } = data;
      const temp = Object.entries(near_earth_objects).map(([date, data]) => {
        const astroInfo = data.map((item) => {
          return {
            id: item.id,
            neo_reference_id: item.neo_reference_id,
            name: item.name,
            url: item.nasa_jpl_url,
            diameters: item.estimated_diameter.kilometers,
            hazard: item.is_potentially_hazardous_asteroid,
            approach: item.close_approach_data[0].miss_distance.kilometers,
          };
        });
        return {
          ...astroInfo,
        };
      });

      setNumOfAsteroids(element_count);
      setAestroids(temp);
    } catch (err) {
      setIsError(true);
    }
  };
  const setLoader = (bool) => {
    setLoading(bool);
  };
  const closeError = (bool) => {
    setIsError(bool);
  };
  const errors = ["Wrong date format"];
  return (
    <div>
      <div className="container mx-auto flex px-10 lg:px-40 py-10 -mb-32 items-left justify-start flex-col">
        <div className="text-left lg:w-2/3 w-full">
          <p className="text-base text-white">
            NeoWs (Near Earth Object Web Service) is a RESTful web service for
            near earth Asteroid information. With NeoWs a user can: search for
            Asteroids based on their closest approach date to Earth, lookup a
            specific Asteroid with its NASA JPL small body id, as well as browse
            the overall data-set. Data-set: All the data is from the NASA JPL
            Asteroid team (http://neo.jpl.nasa.gov/). This API is maintained by
            SpaceRocks Team: David Greenfield, Arezu Sarvestani, Jason English
            and Peter Baunach.
            <a
              className="text-xl text-blue-500 hover:text-blue-600"
              target="_blank"
              href="https://github.com/SpaceRocks/"
              rel="noreferrer"
            >
              {" "}
              Chceck it out here
            </a>
          </p>
        </div>
      </div>
      <AestroidForm submitHandler={submitHandler} setLoader={setLoading} />
      {loading === true ? <Loading /> : ""}
      {isError !== false ? (
        <ErrorModal loaded={setLoader} close={closeError} errors={errors} />
      ) : (
        ""
      )}
      {aestroids === null ? (
        ""
      ) : (
        <AestroidDisplay
          data={aestroids}
          numOfAsteroids={numOfAsteroids}
          setLoader={setLoader}
        />
      )}
    </div>
  );
}

export default Aestroid;
