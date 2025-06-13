import { useEffect, useState } from "react";

const User = ({ name }) => {
  const [count] = useState(0);
  const [count2] = useState(2);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     console.log("Set interval inside useEffect");
  //   }, 1000);

  //   //* The component process always runs in the background even if we switch to another route. So it is required to stop those
  //   //* return is invoked after we leave our page;
  //   //* Unmounting Phase
  //   return () => {
  //     clearInterval(timer);
  //     console.log("useEffect Return");
  //   };
  // }, []);

  return (
    <div className="user-card">
      <h2>Count: {count}</h2>
      <h2>Count2: {count2}</h2>
      <h2>Name: {name}</h2>
      <h2>Location : Patna</h2>
      <h2>Contact : @sinhaayush</h2>
    </div>
  );
};

export default User;
