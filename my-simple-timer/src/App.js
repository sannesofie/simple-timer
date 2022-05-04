/* eslint-disable no-undef */
import './App.css';
import { Header } from './components/header/Header';
import { Button } from './components/button/Button';
import { Timer } from './components/timer/Timer';


function App() {
  const [timer, setTime] = useState(Time)

  const countDown = () => {
    setInterval(setTime, 1000, (x) => x - 1);
  };

  return (
    <div className="App">
      <Header />
      <Timer sec={timer} />
      <Button handle={countDown} name="start" color="red" />
    </div>
  );
}

export default App;
