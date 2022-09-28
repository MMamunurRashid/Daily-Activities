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
        <div className="">
          <h1 className="pl-5 text-lg font-semibold">Add a Break</h1>
        </div>
      </div>
    </div>
  );
};

export default User;
