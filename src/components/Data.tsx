import { useState } from "react";
import type { data } from "./Person";

const Data = ({ name, age, isMarried }: data) => {
  const [showInfo, setShowInfo] = useState<boolean>(false);

  const handleClick = () => setShowInfo((prev) => !prev);

  return (
    <>
      {showInfo && (
        <div>
          <p>my name is {name}</p>
          <p>And i'm {age}</p>
          <p>
            {isMarried ? `And ofcourse i'm married` : `Yes, i'm not married`}
          </p>
        </div>
      )}
      <button onClick={handleClick}>{!showInfo ? "Show Data" : "Close"}</button>
    </>
  );
};

export default Data;
