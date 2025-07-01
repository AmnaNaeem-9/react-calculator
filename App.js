import { useState, useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);

  const [result, setResult] = useState(0);

  //Arithmetic handlers 
  function plus(e) {
    e.preventDefault();
    setResult(prev => prev + Number(inputRef.current.value || 0));
  }

  function minus(e) {
    e.preventDefault();
    setResult(prev => prev - Number(inputRef.current.value || 0));
  }

  function times(e) {
    e.preventDefault();
    setResult(prev => prev * Number(inputRef.current.value || 1));
  }

  function divide(e) {
    e.preventDefault();
    const divisor = Number(inputRef.current.value || 1);
    if (divisor === 0) {
      alert("Division by zero isn’t allowed!");
      return;
    }
    setResult(prev => prev / divisor);
  }

  // Reset helpers 
  function resetInput(e) {
    e.preventDefault();
    inputRef.current.value = "";
  }

  function resetResult(e) {
    e.preventDefault();
    setResult(0);
  }

  return (
    <div className="App">
      <h1>Simplest Working Calculator</h1>

      <form>
        {/* current total */}
        <p ref={resultRef}>{result}</p>

        <input
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        /* pattern is unnecessary with type="number" but harmless */
        />

        {/*Arithmetic buttons */}
        <button onClick={plus}>add</button>
        <button onClick={minus}>subtract</button>
        <button onClick={times}>multiply</button>
        <button onClick={divide}>divide</button>

        {/* reset buttons */}
        <button onClick={resetInput}>reset input</button>
        <button onClick={resetResult}>reset result</button>
      </form>
    </div>
  );
}

export default App;
