import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        Toggle
      </button>
      {toggle && <RandomComponent />}
    </div>
  );
};

const RandomComponent = () => {
  useEffect(() => {
    console.log("Hi");
    const intId = setInterval(() => {
      console.log("Hello from interval");
    }, 1000);
    return () => {
      clearInterval(intId);
    };
  }, []);
  return <h1>Hello</h1>;
};

export default CleanupFunction;
