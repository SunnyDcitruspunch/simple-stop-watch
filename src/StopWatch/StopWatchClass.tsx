import React, { Component } from 'react'

type State = {
  interval: number | null
  isRunning: boolean
  time: number
  startTime: number
}

class StopWatchClass extends Component<{}, State> {
  state = {
    interval: 0,
    isRunning: false,
    startTime: 0,
    time: 0
  }

  render() {
    return (
      <div className="stop-watch">
        <div>{this.getFormattedTime()}</div>
        <div>
          <button className='start-button' onClick={this.start} type='button'>Start</button>
          <button className='stop-button' onClick={this.stop} type='button'>Stop</button>
          <button className='reset-button' onClick={this.reset} type='button'>Reset</button>
        </div>
      </div>
    )
  }

  update = (): void => {
    this.setState(({ time: Date.now() - this.state.startTime }))
  }

  getFormattedTime = (): string => {
    const { time } = this.state
    let hours = Math.floor(time / (1000 * 60 * 60)).toString()
    let mins = Math.floor(time / (1000 * 60) % 60).toString()
    let sec = Math.floor(time / (1000) % 60).toString()
    let milisec = Math.floor((time % 1000) / 10).toString()

    hours = String(hours).padStart(2, '0')
    mins = String(mins).padStart(2, '0')
    sec = String(sec).padStart(2, '0')
    milisec = String(milisec).padStart(2, '0')

    return `${hours} : ${mins} : ${sec} : ${milisec}`
  }

  start = (): void => {
    if (!this.state.isRunning) {
      const startTime = Date.now() - this.state.time
      const intervalId = window.setInterval(this.update, 10)
      this.setState({ isRunning: true, interval: intervalId, startTime })
    }
  }

  stop = (): void => {
    if (this.state.isRunning && this.state.interval !== null) {
      clearInterval(this.state.interval)
      this.setState({ isRunning: false, interval: null })
    }
  }

  reset = (): void => {
    if (this.state.interval !== null) {
      clearInterval(this.state.interval)
    }
    this.setState({ isRunning: false, interval: null, time: 0 })
  }
}

export default StopWatchClass 