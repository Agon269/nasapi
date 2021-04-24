import React, { useEffect } from "react";

function ErrorModal({ close, loaded, errors }) {
  const handleClose = () => {
    close(false);
  };
  useEffect(() => {
    loaded(false);
  }, [loaded]);
  return (
    <div>
      <style>{"body{background-color:black}"}</style>
      <div className="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center">
        <div className="bg-red-50 p-4 rounded flex items-start text-gray-600 my-4 shadow-lg max-w-xl mx-auto">
          <button className="focus:outline-none" onClick={handleClose}>
            <div className="text-lg text-red-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current w-5 pt-1"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.597 17.954l-4.591-4.55-4.555 4.596-1.405-1.405 4.547-4.592-4.593-4.552 1.405-1.405 4.588 4.543 4.545-4.589 1.416 1.403-4.546 4.587 4.592 4.548-1.403 1.416z" />
              </svg>
            </div>
          </button>

          <div className=" px-3">
            <h3 className="text-gray-800 font-semibold tracking-wider">
              Errors
            </h3>
            <ul className="list-disc list-inside">
              {errors.map((text, index) => {
                return <li key={index}>{text}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ErrorModal;
