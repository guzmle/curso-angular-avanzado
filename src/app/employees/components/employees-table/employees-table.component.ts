import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ListComponent} from '../../../core/types/list.component';
import {Employee} from '../../models';
import {ResultList} from '../../../core/intefaces/result-list';

@Component({
  selector: 'app-employees-table',
  templateUrl: './employees-table.component.html',
  styleUrls: ['./employees-table.component.css']
})
export class EmployeesTableComponent extends ListComponent<ResultList<Employee>> implements OnInit {

  @Output() delete = new EventEmitter<Employee>();
  @Output() update = new EventEmitter<Employee>();

  ngOnInit() {
  }

}
