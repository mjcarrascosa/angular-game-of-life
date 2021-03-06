import { Component, OnInit, Input } from '@angular/core';
import { GameOfLifeService } from '../../services/game-of-life.service';
import { Cell } from '../../models/cell.model';
@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  grid : Cell[][];
  constructor(private gameOfLifeService : GameOfLifeService) {
    this.gameOfLifeService.initialize(100,40);
    this.grid = this.gameOfLifeService.getCells();
  }

  ngOnInit(): void {
//    this.grid = this.gameOfLifeService.getCells();
  }

  toggleCell(cell : Cell) : void {
    cell.toggle();
  }

}
