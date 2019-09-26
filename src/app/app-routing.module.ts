import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EmployeesListComponent} from './employees/views/employees-list/employees-list.component';
import { CoursesListComponent } from "./employees/views/courses-list/courses-list.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'employees',
    pathMatch: 'full',
  },
  {
    path: 'employees',
    component: EmployeesListComponent
  },
  {
    path: 'courses',
    component: CoursesListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
