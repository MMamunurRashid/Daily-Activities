import React, { useEffect, useState } from "react";
import Activity from "../Activity/Activity";
import User from "../User/User";
import "./Activities.css";

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const [activityDetails, setActivityDetails] = useState([]);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);

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
        <User activityDetails={activityDetails}></User>
      </div>
    </div>
  );
};

export default Activities;
