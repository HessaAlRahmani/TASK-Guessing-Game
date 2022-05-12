import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const randNum = Math.floor(Math.random() * 100);
let attempt = 4;

function App() {
  const [inputNum, setInputNum] = useState("");

  const compare = () => {
    let btn = document.getElementById("btn");

    console.log({ randNum });
    if (attempt == 0) {
      window.alert("No more attempts allowed \n GAME OVER");
      location.reload();
    } else if (inputNum > randNum) {
      window.alert(
        `the Number is Lower than ${inputNum} \n ${attempt} attempt remaining`
      );
    } else if (inputNum < randNum) {
      window.alert(
        `the number is higher than ${inputNum} \n ${attempt} attempt remaining`
      );
    } else if (inputNum == randNum) {
      window.alert(`You got it right !`);
      btn.disabled = true;
    }
    attempt--;
  };

  return (
    <div className="App">
      <div className="App-header">
        <h1>Guess The Number</h1>
        <input
          type="number"
          placeholder="number between 0 - 100"
          onChange={(event) => setInputNum(event.target.value)}
        ></input>
        <button id="btn" onClick={() => compare()} disabled={false}>
          Submit
        </button>
        <button onClick={() => location.reload()}>Guess Again</button>
      </div>
    </div>
  );
}

export default App;
