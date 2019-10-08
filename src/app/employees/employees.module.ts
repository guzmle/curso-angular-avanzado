import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesListComponent } from './views/employees-list/employees-list.component';
import { EmployeesTableComponent } from './components/employees-table/employees-table.component';
import { EmployeesFormComponent } from './components/employees-form/employees-form.component';
import { ControlsModule } from '../core/controls/controls.module';
import { CoursesListComponent } from './views/courses-list/courses-list.component';
import { CoursesFormComponent } from './components/courses-form/courses-form.component';
import { AppCommonModule } from "../common/app-common.module";
import { FormsModule } from "@angular/forms";
import { FibonacciPipe } from './pipes/fibonacci.pipe';

@NgModule({
  declarations: [
    EmployeesListComponent,
    EmployeesTableComponent,
    EmployeesFormComponent,
    CoursesListComponent,
    CoursesFormComponent,
    FibonacciPipe
  ],
  entryComponents: [EmployeesFormComponent, EmployeesTableComponent],
  imports: [
    CommonModule,
    ControlsModule,
    AppCommonModule,
    FormsModule,
  ]
})
export class EmployeesModule {
}
