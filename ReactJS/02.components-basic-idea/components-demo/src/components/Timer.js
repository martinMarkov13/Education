import { useState } from "react";

const Timer = (props) => {
  const [seconds, setSetcons] = useState(props.start);

  // console.log(`seconds-` + seconds);
  // not good practice - useEffect is better !

  setTimeout(() => {
    setSetcons(seconds + 1);
  }, 1000);

  return (
    <div>
      <h2>Timer</h2>
      Time: {seconds}
    </div>
  );
};

export default Timer;
