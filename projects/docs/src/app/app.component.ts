import { Component } from '@angular/core';

// import { iconTypes, icon } from '@joster-dev/icon';
import { Item } from '@joster-dev/form-control';
import { iconTypes, icon } from 'dist/icon';

@Component({
  selector: 'doc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly iconStartText = '<icon';
  readonly iconEndText = '></icon>';
  readonly iconText = '<icon type></icon>';
  readonly iconStackText = '...</icon-stack>';

  bgGrid: { x: number, y: number }[] = [];
  searchTerm: string | null = null;
  typeItems: IconTypeItem[] = iconTypes.map(iconType => ({
    type: iconType,
    fill: [
      { color: '247000' },
      { color: '700024' },
      { color: '002470' },
    ],
    fillRotate: false,
    fillOpacity: 1,
    stroke: [
      { color: '000000' }
    ],
    strokeRotate: false,
    spin: null
  }));
  rotateItems: Item[] = [
    { key: false, value: 'vertical' },
    { key: true, value: 'horizontal' },
  ];
  spinItems: Item[] = [
    { key: 'x', value: 'x' },
    { key: 'y', value: 'y' },
    { key: 'z', value: 'z' }
  ];
  opacityItems: Item[] = [
    { key: 1, value: '1' },
    { key: 0.5, value: '0.5' },
    { key: 0, value: '0' }
  ];

  constructor() {
    for (let x = 1; x <= 10; x++)
      for (let y = 1; y <= 10; y++)
        this.bgGrid.push({ x, y });
  }

  get filteredTypes(): string[] {
    if (this.searchTerm === null) {
      return this.typeItems.map(item => item.type);
    }
    return this.typeItems
      .filter(item => item.type.toLowerCase().includes(this.searchTerm!.toLowerCase()))
      .map(item => item.type);
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

  mapColors(items: { color: string }[]) {
    return items.map(item => item.color);
  }

  htmlCode(item: IconTypeItem) {
    return [
      `<icon type="${item.type}"`,
      `size="10em"`,
      `[fill]="[${item.fill.map(fill => `${fill.color === null ? 'null' : `'${fill.color}'`}`).join()}]"`,
      `[fillRotate]="${item.fillRotate}"`,
      `[stroke]="[${item.stroke.map(stroke => `${stroke.color === null ? 'null' : `'${stroke.color}'`}`).join()}]"`,
      `[strokeRotate]="${item.strokeRotate}"`,
      `[spin]="${item.spin}"`,
      `></icon>`
    ];
  }
}

interface IconTypeItem {
  type: icon;
  fill: { color: string }[];
  fillRotate: boolean;
  fillOpacity: number;
  stroke: { color: string }[];
  strokeRotate: boolean;
  spin: 'x' | 'y' | null;
}
