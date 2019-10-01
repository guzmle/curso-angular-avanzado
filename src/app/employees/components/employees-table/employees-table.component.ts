import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ListComponent } from '../../../core/types/list.component';
import { Employee } from '../../models';
import { ResultList } from '../../../core/intefaces/result-list';
import { AppUtils } from "../../../core/utils";

@Component({
  selector: 'app-employees-table',
  templateUrl: './employees-table.component.html',
  styleUrls: ['./employees-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeesTableComponent extends ListComponent<ResultList<Employee>> implements OnInit {

  text: string;
  @Output() delete = new EventEmitter<Employee>();
  @Output() update = new EventEmitter<Employee>();

  constructor(private readonly changeRef: ChangeDetectorRef) {
    super();
  }

  ngOnInit() {
  }

  getFibonacci(item: Employee) {
    console.log('Paso aqui');
    return AppUtils.fibonacci(item.code);
  }

  updateFire(item) {
    this.update.emit(item);
    this.changeRef.detectChanges();
    this.changeRef.markForCheck();
  }
}
