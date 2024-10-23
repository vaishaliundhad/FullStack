import React, { useState } from "react";

const Toggle = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div >
      <button onClick={toggle} className="border bg-red-900 rounded-full px-4 py-2 mb-4 ">
        {isToggled ?  "Turn On" :  "Turn Off"}
    
      </button>

      {isToggled ? (
        <p className="text-xl">The feature is turned ON.</p>
      ) : (
        <p className="text-xl">The feature is turned OFF.</p>
      )}
    </div>
  );
};

export default Toggle;
