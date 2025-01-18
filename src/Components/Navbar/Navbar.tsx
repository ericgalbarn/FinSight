import logo from "./logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="relative container mx-auto p-6 bg-stone-950">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-20">
          <Link to="/">
            <img className="w-20" src={logo} alt="" />
          </Link>
          <div className="hidden font-bold lg:flex">
            <Link to="/search" className="text-white hover:text-darkBlue">
              Search
            </Link>
          </div>
        </div>
        <div className="hidden lg:flex items-center space-x-6 text-back">
          <label className="grid cursor-pointer place-items-center">
            <input
              type="checkbox"
              value="synthwave"
              className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
            />
            <svg
              className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <svg
              className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
          <a href="">
            <div className="hover:text-darkBlue text-white">Login</div>
          </a>
          <a
            href=""
            className="px-8 py-3 font-bold rounded text-white bg-lightGreen hover:opacity-70"
          >
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
