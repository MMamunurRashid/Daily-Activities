import React, { useEffect, useState } from "react";
import Activity from "../Activity/Activity";
import User from "../User/User";
import "./Activities.css";

const Activities = () => {
  //activities useState
  const [activities, setActivities] = useState([]);
  //activity details useState
  const [activityDetails, setActivityDetails] = useState([]);
  //break  useState
  const [Break, setBreak] = useState([]);
  // break time useState
  const [breakTime, setBreakTime] = useState([]);

  // activities fake data useEffect
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);

  useEffect(() => {
    fetch("breakFakeData.json")
      .then((res) => res.json())
      .then((data) => setBreak(data));
  }, []);

  const handleBreakTime = (time) => {
    localStorage.setItem(time, time);
    setBreakTime(localStorage.getItem(time));
  };

  const handleAddToList = (activity) => {
    // console.log(activity.id);
    const NewActivity = [...activityDetails, activity];
    setActivityDetails(NewActivity);
  };

  return (
    <div className="Activities">
      <div className="Activitys pt-10 pr-3 ">
        {activities.map((activity) => (
          <Activity
            key={activity.id}
            activity={activity}
            handleAddToList={handleAddToList}
          ></Activity>
        ))}
      </div>
      <div className="bg-white rounded-lg">
        <User
          activityDetails={activityDetails}
          Break={Break}
          handleBreakTime={handleBreakTime}
          breakTime={breakTime}
        ></User>
      </div>
    </div>
  );
};

export default Activities;
