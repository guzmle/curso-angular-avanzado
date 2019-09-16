import {Component, Input, OnInit} from '@angular/core';
import {ControlComponent} from '../../interfaces/control.component';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
})
export class InputTextComponent extends ControlComponent implements OnInit {
  @Input() type = 'text';
  validators;

  ngOnInit(): void {
    this.validators = this.control.validator(this.control);
  }

}
