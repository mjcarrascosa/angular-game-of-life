export class Cell {
  alive: boolean;
  nextState: boolean;
  updated: boolean;

  constructor(alive: boolean) {
    this.alive = alive;
    this.nextState = false;
    this.updated = false;
  }

  isAlive() : boolean {
    return this.alive;
  }


  toggle() : void {
    this.alive = !this.alive;
  }

  setNextState(nextState : boolean) : void {
    this.nextState = nextState;
    this.updated = true;
  }

  update() : void {
    if(this.updated) {
      this.alive = this.nextState;
      this.updated=false;
    }
  }

  reset() : void {
    this.alive = this.nextState = false;
  }
}
