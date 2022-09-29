import React, { useEffect, useState } from "react";
import "./User.css";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
const User = (props) => {
  const [breakTime, setBreakTime] = useState([]);

  const { activityDetails, Break } = props;
  let totalActivityTime = 0;
  for (const activityTime of activityDetails) {
    totalActivityTime = totalActivityTime + activityTime.timeRequired;
  }

  const handleBreakTime = (Break) => {
    // console.log(Break.id);
    localStorage.setItem("time", Break.time);
    setBreakTime(JSON.parse(localStorage.getItem("time")));
  };
  useEffect(() => {
    setBreakTime(JSON.parse(localStorage.getItem("time")));
  }, []);

  const handleComplete = () => {
    console.log("clicked");
    toast("Wow Great Job Mamun!! Your todays Activities Done!!");

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Wow Great Job Mamun!! Your todays Activities Done!!",
      showConfirmButton: false,
      timer: 3000,
    });
  };

  return (
    <div className="user">
      <div className="pt-3 ">
        <div className="flex items-center pl-3">
          <img
            className="w-12 h-12 rounded-full "
            src="https://scontent.fdac5-1.fna.fbcdn.net/v/t39.30808-6/278864197_3268548550136106_2131327974181389030_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=vuCWIQOu3ZUAX-X3iHq&_nc_ht=scontent.fdac5-1.fna&oh=00_AT9Pk22vSzWP39N7XSbqnYqRePuQKZd4Rw2v8DMnrsGPVg&oe=63390442"
            alt=""
          />
          <div className=" pl-1">
            <h1 className="text-xl font-bold">Md Mamunur Rashid</h1>
            <h5>
              <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> Dhaka,
              Bangladesh
            </h5>
          </div>
        </div>
        <h1 className="pt-1 text-lg font-semibold items-center text-center">
          Web Developer
        </h1>
        <h1 className=" text-lg font-semibold text-center">
          Student-CSE, IUBAT
        </h1>
        <div className="mt-10">
          <h1 className="pl-3 text-lg font-semibold">Add a Break</h1>
          <div className="text-center mt-3 rounded bg-gray-300 py-5 mx-1">
            {Break.map((Break) => (
              <button
                key={Break.id}
                onClick={() => handleBreakTime(Break)}
                className="text-white font-semibold p-3 rounded-lg ml-1 bg-red-400 hover:bg-indigo-700 "
              >
                {Break.time}m
              </button>
            ))}
          </div>
        </div>
        <div>
          <h1 className="mt-14 ml-3 text-lg font-semibold">
            Activities Details
          </h1>
          <div className="rounded bg-gray-200 p-3 m-3">
            <h1 className="font-semibold ml-">
              Activities Time: {totalActivityTime} minute
            </h1>
          </div>
          <div className="rounded bg-gray-200 p-3 m-3">
            <h1 className="font-semibold ml-">
              Break Time: {breakTime} minute
            </h1>
          </div>
        </div>
        <div className="">
          <button
            onClick={handleComplete}
            className="mt-14 text-lg text-white ml-12 font-bold p-3 rounded-lg bg-indigo-700 hover:bg-gray-400"
          >
            Activity Completed
          </button>
        </div>
      </div>
    </div>
  );
};

export default User;
