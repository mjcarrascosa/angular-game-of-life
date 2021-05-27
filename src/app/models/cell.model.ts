export class Cell {
  alive: boolean;
  nextState: boolean;

  constructor(alive: boolean) {
    this.alive = alive;
    this.nextState = alive;
  }

  isAlive() : boolean {
    return this.alive;
  }


  toggle() : void {
    this.alive = !this.alive;
    this.nextState=this.alive;
  }

  setNextState(nextState : boolean) : void {
    this.nextState = nextState;
  }

  update() : void {
    if(this.alive != this.nextState) {
      this.alive = this.nextState;
    }
  }

  reset() : void {
    this.alive = this.nextState = false;
  }
}
