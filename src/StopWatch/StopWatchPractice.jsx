import { Fragment, useEffect, useRef, useState } from 'react'


// component feedback chatGPT: https://chat.openai.com/share/e2e782df-abbd-4e8f-91a3-2352ad2eef8a
function StopWatch() {
  const [isRunning, setIsRunning] = useState(false)
  const [elapsedTime, setElapsedTime] = useState(0)
  const intervalIdRef = useRef(null)
  const startTimeRef = useRef(0)

 useEffect(() => {
    if(isRunning) {
      intervalIdRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current)
      }, 100)
    } else {
      clearInterval(intervalIdRef.current);
  }

    return () => {
      clearInterval(intervalIdRef.current)
    }

  }, [isRunning])

  function startTimer() {
    setIsRunning(true)
    startTimeRef.current = Date.now() - elapsedTime
  }

  function pauseTimer() {
    setIsRunning(false)
  }

  function resetTimer() {
    setElapsedTime(0)
    setIsRunning(false)
  }

  function getFormattedTime() {
    let hours = Math.floor(elapsedTime / (1000 * 60*60))
    let mins = Math.floor(elapsedTime / (1000 * 60) % 60)
    let seconds = Math.floor(elapsedTime / 1000 % 60)
    let miliseconds = Math.floor((elapsedTime % 1000) / 10)

    hours = String(hours).padStart(2,'0')
    mins = String(mins).padStart(2,'0')
    seconds = String(seconds).padStart(2,'0')
    miliseconds = String(miliseconds).padStart(2,'0')

    return `${hours} : ${mins} : ${seconds} : ${miliseconds}`
  }

  return (
    <Fragment>
      <div>{getFormattedTime()}</div>
      <div>
        {/* Accessible reach internet applications */}
        <button type="button" aria-label="Start Stopwatch" onClick={startTimer}>Start</button>
        <button type="button" aria-label="Pause Stopwatch" onClick={pauseTimer}>Pause</button>
        <button type="button" aria-label="Reset Stopwatch" onClick={resetTimer}>Reset</button>
      </div>
    </Fragment>
  )
}

export default StopWatch