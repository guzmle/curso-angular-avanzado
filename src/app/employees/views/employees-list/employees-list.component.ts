import {Component, OnDestroy, OnInit} from '@angular/core';
import {EmployeesListService} from './employees-list.service';
import {ResultList} from '../../../core/intefaces/result-list';
import {Employee} from '../../models';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit, OnDestroy {
  model: ResultList<Employee>;
  subscription: Subscription;

  constructor(private readonly service: EmployeesListService) {
    this.subscription =this.service.modelChanges.subscribe((model) => this.model = model);
  }

  ngOnInit() {
    this.service.getData();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  openAddEmployee() {
    this.service.openAddEmployee();
  }

  openUpdateEmployee(data) {
    this.service.openUpdateEmployee(data);
  }

  deleteEmployee(data) {
    this.service.deleteEmployee(data);
  }
}
