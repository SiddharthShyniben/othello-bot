import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TwoDimensionalArrayHelperService {

  findNeighbors(array: any[], i: number, j: number): any[] {
    return [
      array?.[i - 1]?.[j - 1] || 0,
      array?.[i]?.[j - 1] || 0,
      array?.[i + 1]?.[j - 1] || 0,
      array?.[i]?.[j - 1] || 0,
      array?.[i]?.[j + 1] || 0,
      array?.[i + 1]?.[j - 1] || 0,
      array?.[i + 1]?.[j] || 0,
      array?.[i + 1]?.[j + 1] || 0,
    ];
  }

  // line(x0: number, y0: number, x1: number, y1: number): any[] {
  //   var dx = Math.abs(x1 - x0);
  //   var dy = Math.abs(y1 - y0);
  //   var sx = (x0 < x1) ? 1 : -1;
  //   var sy = (y0 < y1) ? 1 : -1;
  //   var err = dx - dy;
  //   const points = []

  //   while (true) {
  //     points.push([x0, y0]); 

  //     if ((x0 === x1) && (y0 === y1)) break;
  //     var e2 = 2 * err;
  //     if (e2 > -dy) { err -= dy; x0 += sx; }
  //     if (e2 < dx) { err += dx; y0 += sy; }
  //   }

  //   return points;
  // }

  getLines(array: any[], cellX: number, cellY: number) {
    const lines: { horizontal: any[], vertical: any[], backward: any[], forward: any[] } = {horizontal: [], vertical: [], backward: [], forward: []};

    // Horizontal
    lines.horizontal = array[cellX];

    // Vertical
    const vertical: number[] = [];
    array.forEach(subArray => vertical.push(subArray[cellY]))
    lines.vertical = vertical

    // Diagonals (forward as in forward slash, backward as in backward slash)
    let forward: any[] = [];
    let backward: any[] = [];
    let n = array.length;
    array.forEach((row, y) => {
        let x = cellX - (cellY - y);
        if (x >= 0 && x < n) backward.push(row[x]);
        x = cellX + (cellY - y);
        if (x >= 0 && x < n) forward.push(row[x]); 
    });
    lines.backward = backward
    lines.forward = forward

    return lines;
  }

}
