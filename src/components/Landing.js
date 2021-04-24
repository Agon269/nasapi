import React from "react";

function Landing({ info, setLoader }) {
  const ending = info.explanation.length / 2;
  const text1 = info.explanation.substring(0, ending);
  const text2 = info.explanation.substring(ending);

  const setLoading = () => {
    setLoader(false);
  };

  const imageVideo = () => {
    if (info.media_type === "video") {
      return (
        <div className="container mx-auto flex px-10 lg:px-40 py-10  items-left justify-start flex-col ">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src={`${info.url}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
              onLoad={setLoading}
            />
          </div>
        </div>
      );
    } else {
      return (
        <div className="container mx-auto flex px-5  items-center justify-center flex-col">
          <img
            className="lg:w-4/6 md:w-4/6 w-4/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src={info.url}
            onLoad={setLoading}
          />
        </div>
      );
    }
  };
  return (
    <div>
      <style>{"body{background-color:black}"}</style>
      <section className="text-gray-400 bg-transparent body-font">
        <div className="container mx-auto flex px-10 lg:px-40 py-10  items-left justify-start flex-col ">
          <div className="text-left lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              {info.title}
            </h1>
            <p className="leading-relaxed mb-8">{text1}</p>
          </div>
        </div>

        {imageVideo()}

        <div className="container mx-auto flex px-10 lg:px-40 py-10  items-right justify-end flex-col ">
          <p className="leading-relaxed mb-8 text-right w-full lg:px-40 sm\:px-10">
            {text2}
          </p>

          <blockquote className="flex-start bg-transparent border-l-8 italic border-gray-400 px-4 py-3">
            {info.date}
          </blockquote>
        </div>
      </section>
    </div>
  );
}

export default Landing;
