import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {ResultList} from '../../../core/intefaces/result-list';
import {Employee} from '../../models';
import {EmployeesRemoteService} from '../../services/employees-remote.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {EmployeesFormComponent} from '../../components/employees-form/employees-form.component';
import {ModalComponent} from '../../../core/types/modal.component';

@Injectable({
  providedIn: 'root'
})
export class EmployeesListService {

  private model = new Subject<ResultList<Employee>>();

  constructor(private readonly remoteService: EmployeesRemoteService,
              private modalService: NgbModal) {
  }

  public get modelChanges() {
    return this.model.asObservable();
  }

  public getData() {
    const data = this.remoteService.getList();
    this.model.next(data);
  }

  public openAddEmployee() {
    const modal = this.modalService.open(EmployeesFormComponent);
    modal.result.then((value) => {
      if (value) {
        this.getData();
      }
    });
  }

  public openUpdateEmployee(data) {
    const modal = this.modalService.open(EmployeesFormComponent);
    const instance = modal.componentInstance as EmployeesFormComponent;
    instance.setData(data);
    modal.result.then((value) => this.getData());
  }

  public deleteEmployee(data) {
    this.remoteService.deleteEmployee(data);
  }
}
