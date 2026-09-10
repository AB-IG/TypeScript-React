import type { data } from "../types/PersonalData";
const Person = ({ name, age, isMarried }: data) => {
  return (
    <div>
      <p>my name is {name}</p>
      <p>And i'm {age}</p>
      <p>{isMarried ? `And ofcourse i'm married` : `Yes, i'm not married`}</p>
    </div>
  );
};

export default Person;
