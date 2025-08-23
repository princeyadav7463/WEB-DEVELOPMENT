import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(10);

  // let counter = 10;

  const addvalue = () => {
    // console.log("value increament", Math.random());
    // counter++;
    // counter +=1
    // counter = counter + 1;
    setCounter(counter + 1);
    // console.log("counter:", counter);
  };

  const subtractvalue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Hey Everyone , we are here to understand hooks in react</h1>
      <h3>Counter: {counter}</h3>

      <button onClick={addvalue}>Increment by 1</button>
      <button onClick={subtractvalue}>Decrement by 1</button>
    </>
  );
}

export default App;
