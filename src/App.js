import "./App.css";
import First from "./First";
import Second from "./Second";
import { useCallback, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [secondCount, setSecondCount] = useState(0);
  const onHandleChange = useCallback(() => {
    console.log("handled event first");
    console.log("added from main");
    console.log("added from custom branch");
    setCount((c) => c + 1);
  }, []);

  const onHandleSecondChange = useCallback(() => {
    console.log("handled event second");
    console.log("added new log");
    setSecondCount((c) => c + 1);
  }, []);

  return (
    <>
      <First count={count} onHandleChange={onHandleChange} />
      <Second count={secondCount} onHandleSecondChange={onHandleSecondChange} />
    </>
  );
}

export default App;
