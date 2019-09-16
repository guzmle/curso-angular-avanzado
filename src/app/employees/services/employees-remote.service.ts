import {Injectable} from '@angular/core';
import {RemoteService} from '../../core/types/remote.service';
import {Employee} from '../models/index';
import {AppUtils} from '../../core/utils/index';
import {ResultList} from '../../core/intefaces/result-list';

@Injectable({
  providedIn: 'root'
})
export class EmployeesRemoteService extends RemoteService {

  private employeeList: Employee[] = [];

  getList(): ResultList<Employee> {
    if (!this.employeeList.length) {
      for (let i = 0; i < 10; i++) {
        this.employeeList.push({id: i, name: `Nombre ${i}`, surname: `Apellido ${i}`, code: AppUtils.generateNum()});
      }
    }

    return {list: this.employeeList};

  }

  addEmployee(employee: Employee) {
    employee.id = this.employeeList.length;
    employee.code = AppUtils.generateNum();
    this.employeeList.push(employee);
  }

  updateEmployee(employee: Employee) {
    const data = this.employeeList.find((obj: Employee) => employee.id === obj.id);
    console.log('aqui');
    Object.assign(data, employee);
  }

  deleteEmployee(employee: Employee) {
    const index = this.employeeList.findIndex((obj: Employee) => employee.id === obj.id);
    this.employeeList.splice(index, 1);
  }

}
