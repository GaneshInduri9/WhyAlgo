import React from "react";
import logo from "../assets/logo.png";
import { CiSearch } from "react-icons/ci";
const Navbar = () => {
  return (
    <div>
      <div className="flex flex-row items-center py-4 font-medium justify-between">
        <img className="w-20" src={logo} alt="" />

        <div className="border-t border-b bg-gray-50 text-center">
          <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
            <input
              className="flex-1 outline-none bg-inherit text-sm"
              type="text"
              placeholder="Search"
            />
            <CiSearch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
