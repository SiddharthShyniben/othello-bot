import { Component, Input, OnInit } from '@angular/core';
import { Board } from 'src/app/models/board';

@Component({
  selector: 'app-board-view',
  templateUrl: './board-view.component.html',
  styleUrls: ['./board-view.component.sass']
})
export class BoardViewComponent implements OnInit {

  @Input() board: Board = new Board();

  constructor() { }

  ngOnInit(): void {
  }

}
