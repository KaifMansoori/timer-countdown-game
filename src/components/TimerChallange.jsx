import React, { useState, useRef } from "react";
import ResultModal from "./ResultModal";
const TimerChallange = ({ title, targetTime }) => {
  const timer = useRef();
  const dialog = useRef();

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime *1000;
  

  if(timeRemaining<=0){
    clearInterval(timer.current);
    setTimeRemaining(targetTime * 1000);
    dialog.current.open();
  }

  function handleStart() {
    timer.current = setInterval(() => {
    setTimeRemaining(prevTimeRemaining=>prevTimeRemaining-10);
    }, 10);
  }

  function handleStop() {
    dialog.current.open();
    clearInterval(timer.current);
  }

  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} remainingTime={timeRemaining} />

      <section className="challenge">
        <h2>{title}</h2>

        <p className="challange-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>

        <button onClick={timerIsActive ? handleStop : handleStart}>
          {timerIsActive ? "Stop" : "Start"}
        </button>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Timer is Running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
};

export default TimerChallange;
