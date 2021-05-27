import { Injectable } from '@angular/core';
import { Cell } from '../models/cell.model';

@Injectable({
  providedIn: 'root'
})
export class GameOfLifeService {
  private generation: number;
  private cells: Cell[][];
  private width: number;
  private height: number;

  constructor() {
    this.generation = 0;
    this.width = 0;
    this.height = 0;
    this.cells = [];

  }
  initialize(width: number, height: number) {
    this.generation = 0;
    this.width = width;
    this.height = height;
    this.cells = this.generateCells(this.width, this.height);
  }


  getCells(): Cell[][] {
    return this.cells;
  }

  getGeneration(): number {
    return this.generation;
  }

  nextGeneration(cyclicBoard: boolean): void {
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        let neighbours = this.getNeighbours(x, y, cyclicBoard);
        if (this.cells[y][x].isAlive() && (neighbours < 2 || neighbours > 3)) {
          this.cells[y][x].setNextState(false);
        }
        if (!this.cells[y][x].isAlive() && neighbours === 3) {
          this.cells[y][x].setNextState(true);
        }
      }
    }
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        this.cells[y][x].update();
      }
    }
    this.generation++;
  }

  private getNeighbours(x: number, y: number, cyclicBoard: boolean): number {
    return   this.getPossibleNeighbours(x, y, cyclicBoard)
      .filter(offset => this.isAlive(offset.x, offset.y))
      .length;
  }

  private getPossibleNeighbours(x: number, y: number, cyclicBoard: boolean) {
    return cyclicBoard ? [
      { "x": (x - 1 + this.width) % this.width, "y": y },
      { "x": (x - 1 + this.width) % this.width, "y": (y - 1 + this.height) % this.height },
      { "x": x, "y": (y - 1 + this.height) % this.height },
      { "x": (x + 1 + this.width) % this.width, "y": (y - 1 + this.height) % this.height },
      { "x": (x + 1 + this.width) % this.width, "y": y },
      { "x": (x + 1 + this.width) % this.width, "y": (y + 1 + this.height) % this.height },
      { "x": x, "y": (y + 1 + this.height) % this.height },
      { "x": (x - 1 + this.width) % this.width, "y": (y + 1 + this.height) % this.height }
    ] :
      [
        { "x": x - 1, "y": y },
        { "x": x - 1, "y": y - 1 },
        { "x": x, "y": y - 1 },
        { "x": x + 1, "y": y - 1 },
        { "x": x + 1, "y": y },
        { "x": x + 1, "y": y + 1 },
        { "x": x, "y": y + 1 },
        { "x": x - 1, "y": y + 1 }
      ];
  }

  private isAlive(x: number, y: number): boolean {
    return this.isInBound(x, y) ? this.cells[y][x].isAlive() : false;
  }

  private isInBound(x: number, y: number): boolean {
    return x >= 0 && x < this.width && y >= 0 && y < this.height;
  }

  reset(): void {
    this.cells.forEach(row => row.forEach(cell => cell.reset()));
    this.generation = 0;
  }

  private generateCells(width: number, height: number): Cell[][] {
    const cells = Array.from({
      length: width * height
    }).map((_, i, a) => new Cell(false));

    const grid = [];
    for (let i = 0; i < height; i++) {
      grid.push(cells.slice(i * width, (i + 1) * width));
    }

    return grid;
  }

}
