import { Component } from '@angular/core';
// import { iconTypes } from '@joster/icon';
import { iconTypes } from 'dist/icon';

@Component({
  selector: 'pg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  bgGrid: { x: number, y: number }[] = [];
  typeItems = iconTypes.map(iconType => ({
    type: iconType,
    fill: [
      { color: '00FF00' },
      { color: 'FF0000' },
      { color: '0000FF' }
    ]
  }));

  constructor() {
    for (let x = 1; x <= 10; x++)
      for (let y = 1; y <= 10; y++)
        this.bgGrid.push({ x, y });
  }

  fillColors(items: { color: string }[]): string[] {
    return items.map(item => item.color);
  }
}
