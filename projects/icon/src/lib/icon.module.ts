import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconComponent } from './icon.component';
import { IconStackComponent } from './icon-stack/icon-stack.component';
import { SizeDirective } from './size.directive';

@NgModule({
  declarations: [
    IconComponent,
    IconStackComponent,
    SizeDirective
  ],
  imports: [CommonModule],
  exports: [
    IconComponent,
    IconStackComponent
  ]
})
export class IconModule { }
