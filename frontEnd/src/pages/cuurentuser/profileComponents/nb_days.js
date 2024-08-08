import React from "react";
import { CircularProgressbar ,buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const NbdaysBox = ({ nbDays }) => {
  const value = nbDays;
  const getPathColor = (value) => {
    if (value < 5) return '#dc143c'; 
    if (value < 10) return '#ffa500'; 
    if (value < 50) return '#3e98c7'; 
    return '#3c6'; // Green
  };
  return (
    <div className="flex flex-col gap-4 items-center p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700  hover:shadow-gray-400">
      <h1 className="text-xl font-semibold dark:text-white text-gray-800">Solde jour</h1>
      <div className="h-48 w-48">
        <CircularProgressbar value={value} maxValue={60} text={`${value}`} styles={buildStyles({
    // Rotation of path and trail, in number of turns (0-1)
    //rotation: 0.25,

    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
    strokeLinecap: 'round',

    // Text size
    //textSize: '16px',

    // How long animation takes to go from one percentage to another, in seconds
    pathTransitionDuration: 0.5,

    // Can specify path transition in more detail, or remove it entirely
    pathTransition: 'none',

    // Colors
    pathColor: getPathColor(value),
    textColor: '#3e98c7',
    trailColor: '#d6d6d6',
    backgroundColor: '#3e98c7',
  })}/>
      </div>
    </div>
  );
};

export default NbdaysBox;
