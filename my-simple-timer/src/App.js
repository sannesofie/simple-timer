import { useState } from "react";
import './App.css';
import { Header } from './components/header/Header';
import { Button } from './components/button/Button';
import { Timer } from './components/timer/Timer';
import { Time } from './data'


function App() {
  const [timer, setTime] = useState(Time)

  const useCountDown = () => {
    setInterval(setTime, 1000, (x) => x - 1);
  };

  return (
    <div className="App">
      <Header />
      <Button handle={useCountDown} name="Start"/>
      <Timer sec={timer} />
    </div>
  );
}

export default App;
