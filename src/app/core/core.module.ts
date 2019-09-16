import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderBarComponent} from './components/header-bar/header-bar.component';
import { InputTextComponent } from './controls/components/input-text/input-text.component';

@NgModule({
  declarations: [HeaderBarComponent],
  imports: [
    CommonModule,
  ],
  exports: [HeaderBarComponent],
})
export class CoreModule {
}
