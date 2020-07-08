import { Component } from '@angular/core';
import { SizeDirective } from '../size.directive';

@Component({
  selector: 'icon-stack',
  templateUrl: './icon-stack.component.html',
  styleUrls: ['./icon-stack.component.scss']
})
export class IconStackComponent extends SizeDirective {

  constructor() {
    super();
  }
}
