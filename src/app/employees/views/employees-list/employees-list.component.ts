import { Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { EmployeesListService } from './employees-list.service';
import { ResultList } from '../../../core/intefaces/result-list';
import { Employee } from '../../models';
import { Subscription } from 'rxjs';
import { EmployeesTableComponent } from "../../components/employees-table/employees-table.component";
import { ContainerDirective } from "../../directives/container.directive";

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit, OnDestroy {
  model: ResultList<Employee>;
  subscription: Subscription;
  text: string;

  @ViewChild(EmployeesTableComponent, {static: true})
  tableComponent: EmployeesTableComponent;

  @ViewChild(ContainerDirective, {static: true}) elementDiv: ContainerDirective;

  constructor(private readonly service: EmployeesListService, private factory: ComponentFactoryResolver) {
    this.subscription = this.service.modelChanges.subscribe((model) => this.model = model);
  }

  ngOnInit() {
    this.service.getData();
    this.tableComponent.update.subscribe((value) => console.log(value));

    const componentRef = this.factory.resolveComponentFactory(EmployeesTableComponent);
    const component = this.elementDiv.containerRef.createComponent(componentRef);
    console.log(component);
    component.instance.model = this.model;

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
