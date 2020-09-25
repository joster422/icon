import { Component, Input } from '@angular/core';
import { icon } from './icon.type';
import { iconTypes } from './icon-types.const';
import { SizeDirective } from './size.directive';

@Component({
  selector: 'icon[type]',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent extends SizeDirective {
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
    if (this.hexString.test(value))
      value = [value];
    if (Array.isArray(value) && value.every((item: any) => this.hexString.test(item)))
      this._fill = value;
  }
  _fill = ['FFFFFF'];

  @Input()
  get fillRotate() {
    return this._fillRotate
      ? 90
      : 0;
  }
  set fillRotate(value: any) {
    if (value === '')
      value = true;
    if (value === null || value === undefined)
      value = false;
    if (typeof value === 'boolean')
      this._fillRotate = value;
  }
  _fillRotate = false;

  @Input()
  get stroke() {
    return this._stroke;
  }
  set stroke(value: any) {
    if (this.hexString.test(value))
      value = [value];
    if (Array.isArray(value) && value.every((item: any) => this.hexString.test(item)))
      this._stroke = value;
  }
  _stroke = ['000000'];

  @Input()
  get strokeRotate() {
    return this._strokeRotate
      ? 90
      : 0;
  }
  set strokeRotate(value: any) {
    if (value === '')
      value = true;
    if (value === null || value === undefined)
      value = false;
    if (typeof value === 'boolean')
      this._strokeRotate = value;
  }
  _strokeRotate = false;

  id = `${Math.random().toString(36).substr(2, 9)}`;
  centerX = 50;
  centerY = 50;
  strokeWidth = 5;
  hexString = /^[0-9A-Fa-f]{6}$/;

  constructor() {
    super();
  }

  fillGradientOffset(index: number) {
    if (this.fill.length === 1)
      return '0';
    return 100 - (((this.fill.length - 1 - index) / (this.fill.length - 1)) * 100);
  }

  strokeGradientOffset(index: number) {
    if (this.stroke.length === 1)
      return '0';
    return 100 - (((this.stroke.length - 1 - index) / (this.stroke.length - 1)) * 100);
  }
}
