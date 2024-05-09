class Presenter {
  private time: number
  private interval: number
  private isRunning: boolean
  private elapsedTime: number

  constructor() {
    this.elapsedTime = 0
    this.time = 0
    this.interval = 0
    this.isRunning = false
  }

  public getTime(): string {
    let hours = Math.floor(this.elapsedTime / (1000 * 60 * 60)).toString()
    let mins = Math.floor(this.elapsedTime / (1000 * 60) % 60).toString()
    let seconds = Math.floor(this.elapsedTime / 1000 % 60).toString()
    let miliseconds = Math.floor((this.elapsedTime % 1000) / 10).toString()
    hours = String(hours).padStart(2,'0')
    mins = String(mins).padStart(2,'0')
    seconds = String(seconds).padStart(2,'0')
    miliseconds = String(miliseconds).padStart(2,'0')

    return `${hours} : ${mins} : ${seconds} : ${miliseconds}`
  }

  public start(): void {
    this.isRunning = true
  }

  public reset(): void {

  }

  public stop(): void {
    this.interval = 0
    this.isRunning = false
  }
}

export default Presenter 