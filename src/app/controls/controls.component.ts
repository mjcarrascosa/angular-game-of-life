import { Component, OnInit } from '@angular/core';
import { GameOfLifeService } from '../game-of-life.service';
@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {
  private intervalId : number;
  private running : boolean;
  constructor(private gameOfLifeService : GameOfLifeService) {
    this.intervalId = 0;
    this.running = false;
  }

  ngOnInit(): void {
  }

  get isRunning() : boolean {
    return this.running;
  }
  run() : void {
    this.running = true;
    this.intervalId = window.setInterval(() => {this.gameOfLifeService.nextGeneration();}, 100);
  }

  stop() : void {
    this.running = false;
    window.clearInterval(this.intervalId);
  }

  reset() : void {
    this.stop();
    this.gameOfLifeService.reset();
  }

  getGeneration() : number {
    return this.gameOfLifeService.getGeneration();
  }
}
