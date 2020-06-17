import { Component, Input } from '@angular/core';
import { icon } from './icon.type';
import { types } from './types.const';

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
    if (types.includes(value))
      this._type = value;
  }
  _type!: icon;

  @Input()
  get gradientStart() {
    return this._gradientStart;
  }
  set gradientStart(value: any) {
    if (/^[0-9A-Fa-f]{6}$/.test(value))
      this._gradientStart = value;
  }
  _gradientStart = 'FFFFFF';

  @Input()
  get gradientEnd() {
    return this._gradientEnd;
  }
  set gradientEnd(value: any) {
    if (/^[0-9A-Fa-f]{6}$/.test(value))
      this._gradientEnd = value;
  }
  _gradientEnd = this._gradientStart;

  @Input()
  get stroke() {
    return this._stroke;
  }
  set stroke(value: any) {
    if (/^[0-9A-Fa-f]{6}$/.test(value))
      this._stroke = value;
  }
  _stroke = '000000';

  constructor() { }
}
