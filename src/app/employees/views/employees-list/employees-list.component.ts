import { Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { EmployeesListService } from './employees-list.service';
import { ResultList } from '../../../core/intefaces/result-list';
import { Employee } from '../../models';
import { Subscription } from 'rxjs';
import { EmployeesTableComponent } from "../../components/employees-table/employees-table.component";

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

  @ViewChild('element', {static: true}) elementDiv;

  constructor(private readonly service: EmployeesListService, private factory: ComponentFactoryResolver) {
    this.subscription = this.service.modelChanges.subscribe((model) => this.model = model);
  }

  ngOnInit() {
    this.service.getData();
    console.log(this.elementDiv);
    this.elementDiv.nativeElement.innerHTML = '<h1>Esto es de leo</h1>';
    this.tableComponent.printConsole('leo');
    this.tableComponent.update.subscribe((value) => console.log(value));

    const component = this.factory.resolveComponentFactory(EmployeesTableComponent);
    console.log(component);

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
