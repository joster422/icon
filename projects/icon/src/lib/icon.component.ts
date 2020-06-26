import { Component, Input } from '@angular/core';
import { icon } from './icon.type';
import { iconTypes } from './icon-types.const';

@Component({
  selector: 'icon[type]',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
  @Input()
  get type() {
    return this._type;
  }
  set type(value: any) {
    if (iconTypes.includes(value))
      this._type = value;
  }
  _type!: icon;

  @Input()
  get fill() {
    return this._fill;
  }
  set fill(value: any) {
    const hexString = /^[0-9A-Fa-f]{6}$/;
    if (hexString.test(value))
      value = [value];
    if (Array.isArray(value) && value.every((item: any) => hexString.test(item)))
      this._fill = value;
  }
  _fill = ['FFFFFF'];

  @Input()
  get fillRotate() {
    return this._fillRotate;
  }
  set fillRotate(value: any) {
    // https://developer.mozilla.org/en-US/docs/Web/CSS/angle
    this._fillRotate = value;
  }
  _fillRotate = 0;

  @Input()
  get fillOpacity() {
    return this._fillOpacity;
  }
  set fillOpacity(value: any) {
    this._fillOpacity = value;
  }
  _fillOpacity = 1;

  @Input()
  get stroke() {
    return this._stroke;
  }
  set stroke(value: any) {
    if (/^[0-9A-Fa-f]{6}$/.test(value))
      this._stroke = value;
  }
  _stroke = '000000';

  @Input()
  get strokeWidth() {
    return this._strokeWidth;
  }
  set strokeWidth(value: any) {
    this._strokeWidth = value;
  }
  _strokeWidth = 5;

  @Input()
  get size() {
    return this._size;
  }
  set size(value: any) {
    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/height
    this._size = value;
  }
  _size = '100%';

  constructor() { }

  fillGradientOffset(index: number) {
    if (this.fill.length === 1)
      return '0';
    return 100 - (((this.fill.length - 1 - index) / (this.fill.length - 1)) * 100);
  }

  ringPath() {
    const centerX = 50;
    const centerY = 50;
    const outerRadius = 40;
    const innerRadius = outerRadius - (10 * Math.sqrt(2));
    return `M ${centerX} ${centerY - outerRadius}` +
      `A ${outerRadius} ${outerRadius} 0 1 0 ${centerX} ${centerY + outerRadius}` +
      `A ${outerRadius} ${outerRadius} 0 1 0 ${centerX} ${centerY - outerRadius} Z` +
      `M ${centerX} ${centerY - innerRadius}` +
      `A ${innerRadius} ${innerRadius} 0 1 1 ${centerX} ${centerY + innerRadius}` +
      `A ${innerRadius} ${innerRadius} 0 1 1 ${centerX} ${centerY - innerRadius} Z`;
  }
}
