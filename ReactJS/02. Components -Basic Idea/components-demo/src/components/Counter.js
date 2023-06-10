import { useState } from "react";

const getTitle = (count) => {
  switch (count) {
    case 1:
      return "First Blood";
    case 2:
      return "Double Kill";
    case 3:
      return "Triple Kill";
    case 4:
      return "Multi Kill";
    case 5:
      return "Godlike";
    default:
      return "Counter";
  }
};

export default function Counter(props) {
  const [counter, setCounter] = useState(0);

  const onButtonClick = () => {
    setCounter((state) => state + 1);
  };

  return (
    <div>
    <p style={{fontSize: Math.max(counter, 1)+ `em`}}>
        {counter > 5 ? "Unstoppable" : getTitle(counter)}: {counter}
    </p>
    
      {counter < 10 
      ? <button onClick={onButtonClick}>+</button> 
      : null}
    </div>
  );
}
