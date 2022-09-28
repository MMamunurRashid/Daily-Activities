import React from "react";
import "./Activity.css";
const Activity = (props) => {
  const { handleAddToList, activity } = props;
  const { name, timeRequired, img, description, id } = activity;

  return (
    <div className="Activity text-center rounded-xl  shadow-2xl pb-3">
      <img src={img} alt="" />
      <h3 className="text-2xl font-bold pt-3">{name}</h3>
      <h4>{description}</h4>
      <h5 className="text-lg font-light">Time Required: {timeRequired} min</h5>
      <button
        onClick={() => handleAddToList(activity)}
        className="mt-5 border-0 bg-indigo-600 hover:bg-indigo-300 active:bg-red-500 text-white font-semibold rounded-xl px-12 py-1 "
      >
        Add to List
      </button>
    </div>
  );
};

export default Activity;
