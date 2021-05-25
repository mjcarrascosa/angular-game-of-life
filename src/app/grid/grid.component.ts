import { Component, OnInit, Input } from '@angular/core';
import { GameOfLifeService } from '../game-of-life.service';
import { Cell } from '../cell.model';
@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  grid : Cell[][];
  constructor(private gameOfLifeService : GameOfLifeService) {
    this.gameOfLifeService.initialize(50,30);
    this.grid = this.gameOfLifeService.getCells();
  }

  ngOnInit(): void {
//    this.grid = this.gameOfLifeService.getCells();
  }

  toggleCell(cell : Cell) : void {
    cell.toggle();
  }

}
