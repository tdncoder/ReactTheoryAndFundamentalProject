import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    hobby: "Reading",
  });

  const displayPerson = () => {
    // setPerson({ name: "John", age: 28, hobby: "Swimming" });
    setPerson({ ...person, name: "John" });
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>Enjoys To: {person.hobby}</h3>
      <button type="button" className="btn" onClick={displayPerson}>
        Show John
      </button>
    </>
  );
};

export default UseStateObject;
