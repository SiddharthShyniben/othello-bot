// -1: white, 0: empty, 1: black
const white = -1;
const empty = 0;
const black = 1;

const emptyRow = new Array(8).fill(empty);

export class Board {
  board: number[][] = [];

  constructor(board?: number[][]) {
    this.board = board ? board : [
      emptyRow,
      emptyRow,
      emptyRow,
      [
        empty,
        empty,
        empty,
        white,
        black,
        empty,
        empty,
        empty
      ],
      [
        empty,
        empty,
        empty,
        black,
        white,
        empty,
        empty,
        empty
      ],
      emptyRow,
      emptyRow,
      emptyRow
    ];
  }

  makeMove(color: "black" | "white", index: string) {

  }
}
