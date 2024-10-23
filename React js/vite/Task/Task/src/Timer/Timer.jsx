// import React, { useState, useEffect } from "react";

// const Timer = () => {
//   // State variables
//   const [time, setTime] = useState(0); // Time in seconds
//   const [isRunning, setIsRunning] = useState(false); // Boolean to check if timer is running
//   const [laps, setLaps] = useState([]); // Array to store lap times

//   // useEffect to start or stop the timer
//   useEffect(() => {
//     let timer = null;
//     if (isRunning) {
//       timer = setInterval(() => {
//         // Using previous state to update time
//         setTime((prevTime) => prevTime + 1);
//       }, 1000);
//     } else if (!isRunning && time !== 0) {
//       clearInterval(timer);
//     }
//     return () => clearInterval(timer); // Cleanup the timer on unmount
//   }, [isRunning]);

//   // Start or stop the timer
//   const handleStartStop = () => {
//     setIsRunning(!isRunning);
//   };

//   // Reset the timer and clear laps
//   const handleReset = () => {
//     setIsRunning(false);
//     setTime(0);
//     setLaps([]);
//   };

//   // Record a lap time
//   const handleLap = () => {
//     setLaps([...laps, time]); // Spread operator to add a new lap
//   };

//   return (
//     <div>
//       <h1>Timer: {time}s</h1>
//       <button onClick={handleStartStop}>
//         {isRunning ? "Stop" : "Start"}
//       </button>
//       <button onClick={handleReset} disabled={time === 0 && !isRunning}>
//         Reset
//       </button>
//       <button onClick={handleLap} disabled={!isRunning}>
//         Lap
//       </button>

//       <h2>Laps</h2>
//       <ul>
//         {laps.map((lap, index) => (
//           <li key={index}>Lap {index + 1}: {lap}s</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Timer;


import React, { useState, useEffect } from "react";

const Timer = () => {
  // State to manage the timer's seconds
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  // Effect to handle the timer interval
  useEffect(() => {
    let interval = null;

    if (isActive) {
      // Start the timer when isActive is true
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1); // Update seconds using previous state
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      // Clear the interval if timer is stopped
      clearInterval(interval);
    }
    return () => clearInterval(interval); // Cleanup on unmount or when isActive changes
  }, [isActive, seconds]); // Depend on isActive and seconds

  // Event handlers
  const handleStart = () => {
    setIsActive(true);
  };

  const handleStop = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setIsActive(false);
    setSeconds(0);
  };

  return (
    <div className="m-3 p-2">
      <h1 className="py-2 w-[25%] ml-[37%] bg-slate-200 border mb-6">{seconds} s</h1>
      <button
        onClick={handleStart}
        className="p-2 border bg-violet-700 py-2 px-6 text-white rounded-lg m-2"
      >
        Start
      </button>
      <button
        onClick={handleStop}
        className="p-2 border-2 bg-violet-700 py-2 px-6 text-white rounded-lg m-2"
      >
        Stop
      </button>
      <button
        onClick={handleReset}
        className="p-2 border-2 bg-violet-700 py-2 px-6 text-white rounded-lg m-2"
      >
        Reset
      </button>
    </div>
  );
};

export default Timer;




