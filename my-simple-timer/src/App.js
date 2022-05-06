import { useState } from "react";
import './App.css';
import { Header } from './components/header/Header';
import { Button } from './components/button/Button';
import { Timer } from './components/timer/Timer';



function App() {
  const [timer, setTime] = useState(0)

  const useCountDown = () => {

    setInterval(setTime, 1000, (x) => x + 1);
    clearInterval(setTime);
  };
const stop = () => {


  setTime(0);
}

  return (
    <div className="App">
      <Header />
      <Button handle={useCountDown} name="Start"/>
      <Button handle={stop} name="Stop"/>
      <Button name="Reset"/>
      <Timer sec={timer} />
    </div>
  );
} 

export default App;
