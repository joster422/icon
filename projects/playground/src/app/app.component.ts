import { Component } from '@angular/core';
import { iconTypes } from 'dist/icon';

@Component({
  selector: 'pg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  types = iconTypes;
  bgGrid: { x: number, y: number }[] = [];

  constructor() {
    for (let x = 1; x <= 10; x++)
      for (let y = 1; y <= 10; y++)
        this.bgGrid.push({ x, y });
  }
}
