import { Component } from '@angular/core';

import { iconTypes, icon } from '@joster-dev/icon';
// import { iconTypes, icon } from 'dist/icon';

@Component({
  selector: 'pg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly iconStartText = '<icon';
  readonly iconEndText = '></icon>';
  readonly iconText = '<icon type></icon>';
  readonly iconStackText = '...</icon-stack>';

  bgGrid: { x: number, y: number }[] = [];
  typeItems: IconTypeItem[] = iconTypes.map(iconType => ({
    type: iconType,
    fill: [
      { color: '00FF00' },
      { color: '0000FF' },
      { color: 'FF0000' },
    ],
    fillRotate: false
  }));

  fillRotateItems = [
    { key: true, value: 'horizontal' },
    { key: false, value: 'vertical' },
  ];

  constructor() {
    for (let x = 1; x <= 10; x++)
      for (let y = 1; y <= 10; y++)
        this.bgGrid.push({ x, y });
  }

  get types() {
    return iconTypes
      .map(type => `'${type}'`)
      .join(' | ');
  }

  get iconStackHtmlCode() {
    return [
      '<icon-stack size="10em">',
      `<icon type="times" [fill]="['00FF00', 'FF0000', '0000FF']"></icon>`,
      `<icon type="ring"></icon>`,
      '</icon-stack>'
    ];
  }

  fillColors(items: { color: string }[]) {
    return items.map(item => item.color);
  }

  htmlCode(item: IconTypeItem) {
    return [
      `<icon type="${item.type}"`,
      `size="10em"`,
      `[fill]="[${item.fill.map(fill => `${fill.color === null ? 'null' : `'${fill.color}'`}`).join()}]"`,
      `[fillRotate]="${item.fillRotate}"`,
      `></icon>`
    ];
  }
}

interface IconTypeItem {
  type: icon;
  fill: { color: string }[];
  fillRotate: boolean;
}
