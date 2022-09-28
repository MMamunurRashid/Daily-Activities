import React from "react";

const User = () => {
  return (
    <div>
      <div className="pt-3 ">
        <div className="flex items-center pl-3">
          <img
            className="w-12 h-12 rounded-full "
            src="https://scontent.fdac5-1.fna.fbcdn.net/v/t39.30808-6/278864197_3268548550136106_2131327974181389030_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=vuCWIQOu3ZUAX-X3iHq&_nc_ht=scontent.fdac5-1.fna&oh=00_AT9Pk22vSzWP39N7XSbqnYqRePuQKZd4Rw2v8DMnrsGPVg&oe=63390442"
            alt=""
          />
          <h1 className="text-xl pl-1 font-bold">Md Mamunur Rashid</h1>
        </div>
        <h1 className="pt-1 text-lg font-semibold items-center text-center">
          Web Developer
        </h1>
        <h1 className=" text-lg font-semibold text-center">Student</h1>
        <div className="mt-10">
          <h1 className="pl-3 text-lg font-semibold">Add a Break</h1>
          <div className="text-center mt-3 rounded bg-gray-300 py-5 mx-2">
            <a
              className="text-white font-semibold p-3 rounded-full ml-1 bg-red-400 hover:bg-indigo-700"
              href="/"
            >
              10m
            </a>
            <a
              className="text-white font-semibold p-3 rounded-full ml-1 bg-red-400 hover:bg-indigo-700"
              href="/"
            >
              15m
            </a>
            <a
              className="text-white font-semibold p-3 rounded-full ml-1 bg-red-400 hover:bg-indigo-700"
              href="/"
            >
              20m
            </a>
            <a
              className="text-white font-semibold p-3 rounded-full ml-1 bg-red-400 hover:bg-indigo-700 "
              href="/"
            >
              30m
            </a>
          </div>
        </div>
        <div>
          <h1 className="mt-14 ml-3 text-lg font-semibold">
            Activities Details
          </h1>
          <div className="rounded bg-gray-200 p-3 m-3">
            <h1 className="font-semibold ml-">Activities Time: {} minute</h1>
          </div>
          <div className="rounded bg-gray-200 p-3 m-3">
            <h1 className="font-semibold ml-">Break Time: {} minute</h1>
          </div>
        </div>
        <div className="">
          <button className="mt-14 text-lg text-white ml-12 font-bold p-3 rounded-lg bg-indigo-700 hover:bg-gray-400">
            Activity Completed
          </button>
        </div>
      </div>
    </div>
  );
};

export default User;
