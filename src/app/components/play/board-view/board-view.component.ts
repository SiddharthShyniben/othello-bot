import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TwoDimensionalArrayHelperService } from 'src/app/services/two-dimensional-array-helper.service';


@Component({
  selector: 'app-board-view',
  templateUrl: './board-view.component.html',
  styleUrls: ['./board-view.component.sass']
})
export class BoardViewComponent implements OnInit {

  white = -1;
  empty = 0;
  black = 1;

  constructor(private snackBar: MatSnackBar, private TwoDHelper: TwoDimensionalArrayHelperService) { }

  board = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, -1, 1, 0, 0, 0],
    [0, 0, 0, 1, -1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
  ];

  gameData = {
    currentColor: this.black
  }

  ngOnInit(): void {
  }

  makeHumanMove(row: number, col: number): void {
    const valid = this.validateMove(row, col);
    if (valid.valid) {
      this.fillCell(row, col, this.gameData.currentColor);
      this.gameData.currentColor = this.gameData.currentColor == -1 ? 1 : -1;
    } else this.snackBar.open(valid.reason)
  }

  validateMove(row: number, col: number): { valid: boolean, reason: string } {

    const validity = (valid: boolean = true, reason: string = "Move made") => ({ valid, reason })

    // Rules
    // It should be the right turn
    // It should flip something

    if (this.gameData.currentColor === this.white)
      return validity(false, "It's not your turn");
    if (this.TwoDHelper.findNeighbors(this.board, row, col).every(item => item !== this.white))
      return validity(false, "Nothing can be flipped, so this move can't be played")

    // All possible lines from the point where the piece was placed
    const lines = this.TwoDHelper.getLines(this.board, row, col);
    
    return validity();
  }


  fillCell(row: number, col: number, color: number): void {
    this.board[row][col] = color
  }

  flipCell(row: number, col: number) {
    this.board[row][col] = this.board[row][col] == this.white ? this.black : this.board[row][col] == this.black ? this.white : this.empty;
  }
}
