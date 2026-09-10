import React, { useState } from "react";

const Event_Handling = () => {
  const [name, setName] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    console.log(name);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="enter your name"
        value={name}
        onChange={handleChange}
      />
    </div>
  );
};

export default Event_Handling;
