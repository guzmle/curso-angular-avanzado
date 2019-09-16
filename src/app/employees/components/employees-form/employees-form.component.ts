import {Component, OnInit} from '@angular/core';
import {ModalComponent} from '../../../core/types/modal.component';
import {Employee} from '../../models';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {EmployeesFormService} from './employees-form.service';

@Component({
  selector: 'app-employees-form',
  templateUrl: './employees-form.component.html',
  styleUrls: ['./employees-form.component.css']
})
export class EmployeesFormComponent extends ModalComponent<Employee> implements OnInit {

  form: FormGroup;

  constructor(private readonly fb: FormBuilder, public activeModal: NgbActiveModal, private readonly service: EmployeesFormService) {
    super(activeModal);

    this.form = this.fb.group({
      id: [null, []],
      name: [null, [Validators.required]],
      surname: [null, [Validators.required]],
      code: [null, []],
    });
  }

  ngOnInit() {
  }

  submit() {
    if (this.form.valid) {
      this.service.saveData(this.form.value);
      this.activeModal.close(true);
    } else {
      this.markAsDirty();
    }
  }

  setData(obj) {
    this.form.setValue(obj);
  }

  markAsDirty() {
    this.form.markAsDirty();
    Object.keys(this.form.controls).forEach((col) => {
      this.form.get(col).markAsDirty();
    });
  }
}
