import './App.css';
import { useEffect, useState } from 'react';
import { Digits } from './Digits';
import { Button } from './Button';

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [paused, setPaused] = useState(true);

  const start = () => {
    setRunning(true);
    setPaused(false);
  };

  const pause = () => {
    setRunning(false);
    setPaused(true);
  }

  const reset = () => {
    pause();
    setTime(0);
  }

  useEffect(() => {
    let interval;

    if (running && !paused) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    };

    return () => {
      clearInterval(interval);
    };
  }, [running, paused]);


  return (
    <div className="App">
      <div className='cron-app'>
        <h1>Cron</h1>

        <Digits time={time} />

        <div className='actions'>
          <Button onClicou={start} disabled={running} className='btn btn-start' >
            Iniciar
          </Button>
          <Button onClicou={pause} className='btn btn-pause'>
            Pausar
          </Button>
          <Button disabled={time === 0} onClicou={reset} className='btn btn-reset'>
            Resetar
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
