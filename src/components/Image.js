import React from "react";

function Image({ source, alt, loaded }) {
  const check = () => {
    loaded();
  };
  return (
    <div className="container mx-auto flex px-5  items-center justify-center flex-col">
      <img
        src={source}
        alt={alt}
        onLoad={check}
        className="lg:w-4/6 md:w-4/6 w-4/6 mb-10 object-cover object-center  rounded"
      />
    </div>
  );
}

export default Image;
