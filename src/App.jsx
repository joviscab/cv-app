import { useState } from "react";
import reactLogo from "./assets/react.svg";
import sorriso from "./img/sorriso.jpg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <br />
        <img
          src={sorriso}
          className="doggo"
          alt="The most beautiful dog in the world"
          width={400}
          height={400}
        />
      </div>
      <h1>Sorrisinho</h1>
      <p>The most beautiful doggo in the world!</p>
    </>
  );
}

export default App;
