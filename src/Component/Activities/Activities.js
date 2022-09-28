import React, { useEffect, useState } from "react";
import Activity from "../Activity/Activity";
import User from "../User/User";
import "./Activities.css";

const Activities = () => {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);

  return (
    <div className="Activities">
      <div className="Activitys pt-10 pr-3 ">
        {activities.map((activity) => (
          <Activity key={activity.id} activity={activity}></Activity>
        ))}
      </div>
      <div className="bg-white rounded-lg">
        <User></User>
      </div>
    </div>
  );
};

export default Activities;
