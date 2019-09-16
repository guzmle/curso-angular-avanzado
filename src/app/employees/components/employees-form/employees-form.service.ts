import {Component, Injectable, OnInit} from '@angular/core';
import {ModalComponent} from '../../../core/types/modal.component';
import {Employee} from '../../models';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {EmployeesRemoteService} from '../../services/employees-remote.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeesFormService {

  constructor(private readonly remoteService: EmployeesRemoteService, private modalService: NgbModal) {
  }

  saveData(data: Employee) {
    if (data.id !== null) {
      this.remoteService.updateEmployee(data);
    } else {
      this.remoteService.addEmployee(data);
    }
  }
}
