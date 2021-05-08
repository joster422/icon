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
  set type(value: icon) {
    if (typeof value === 'string')
      value = value.toLowerCase().trim() as icon;
    if (!iconTypes.includes(value))
      throw new Error(`expected [type] to be: ${iconTypes.join(' | ')}`);
    this._type = value;
  }
  _type!: icon;

  @Input()
  get fill() {
    return this._fill;
  }
  set fill(value: string | string[] | null) {
    if (typeof value === 'string')
      value = [value];
    if (value === null || value === undefined)
      value = [];
    if (!Array.isArray(value) || !value.every(item => this.hexString.test(item)))
      throw new Error('expected [fill] to be: string | string[] | null');
    this._fill = value;
  }
  _fill: string[] = [];

  @Input()
  get fillRotate() {
    return this._fillRotate;
  }
  set fillRotate(value: boolean) {
    if (typeof value === 'string' && value === '')
      value = true;
    if (value === null || value === undefined)
      value = false;
    if (typeof value !== 'boolean')
      throw new Error('expected [fillRotate] to be: boolean');
    this._fillRotate = value;
  }
  _fillRotate = false;

  @Input()
  get fillOpacity() {
    return this._fillOpacity;
  }
  set fillOpacity(value: number) {
    if (typeof value !== 'number' || value < 0)
      throw new Error('expected [fillOpacity] to be: number >= 0');
    this._fillOpacity = value;
  }
  _fillOpacity = 0;

  @Input()
  get stroke() {
    return this._stroke;
  }
  set stroke(value: string | string[] | null) {
    if (typeof value === 'string')
      value = [value];
    if (value === null || value === undefined)
      value = [];
    if (!Array.isArray(value) || !value.every(item => this.hexString.test(item)))
      throw new Error('expected [stroke] to be: string | string[] | null');
    this._stroke = value;
  }
  _stroke: string[] = [];

  @Input()
  get strokeRotate() {
    return this._strokeRotate;
  }
  set strokeRotate(value: boolean) {
    if (typeof value === 'string' && value === '')
      value = true;
    if (value === null || value === undefined)
      value = false;
    if (typeof value !== 'boolean')
      throw new Error('expected [strokeRotate] to be: boolean');
    this._strokeRotate = value;
  }
  _strokeRotate = false;

  @Input()
  spin: 'x' | 'y' | 'z' | null = null;

  id = `${Math.random().toString(36).substr(2, 9)}`;
  hexString = /^[0-9A-Fa-f]{6}$/;

  constructor() {
    super();
  }

  get strokeAttribute(): string {
    return this._stroke.length === 0
      ? 'currentColor'
      : `url(#stroke-gradient-${this.id})`;
  }

  get fillAttribute(): string {
    return this._fill.length === 0
      ? 'currentColor'
      : `url(#fill-gradient-${this.id})`;
  }

  rotateTransform(value: boolean) {
    return value ? 90 : 0;
  }

  gradientOffset(index: number, items: string[]) {
    if (items.length === 1)
      return 0;
    return 100 - (((items.length - 1 - index) / (items.length - 1)) * 100);
  }
}
