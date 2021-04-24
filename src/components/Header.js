import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            to="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <img
              className="w-10"
              src="https://res.cloudinary.com/dvfihlcxd/image/upload/v1618995170/58429400a6515b1e0ad75acc_logs77.png"
              alt="logo"
            />
            <span className="ml-3 text-xl text-gray-200"></span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link
              to="/mars"
              className="mr-5 text-gray-300 hover:text-white cursor-pointer"
            >
              Weather on Mars
            </Link>
            <Link
              to="/asteroid"
              className="mr-5 text-gray-300 hover:text-white cursor-pointer"
            >
              Asteroids
            </Link>
            <Link
              to="/satelite"
              className="mr-5 text-gray-300 hover:text-white cursor-pointer"
            >
              Satellite Image
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
