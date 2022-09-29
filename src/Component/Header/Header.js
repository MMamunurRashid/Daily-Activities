import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComputer } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <div className="pt-10">
      <h1 className="pb-3 font-bold text-4xl">
        <FontAwesomeIcon className="text-cyan-900" icon={faComputer} />
        <span className="text-4xl text-cyan-400 pl-2">Daily</span>
        <span className="text-4xl pl-1 ">Activities</span>
      </h1>
      <h4 className="font-semibold">Select Today's Activities</h4>
    </div>
  );
};

export default Header;
