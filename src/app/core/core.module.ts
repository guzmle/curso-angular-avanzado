import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';

@NgModule({
  declarations: [NavigationBarComponent, HeaderBarComponent],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
