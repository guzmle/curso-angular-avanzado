import {Input} from '@angular/core';
import {FormControl} from '@angular/forms';

export class ControlComponent {
  @Input() control: FormControl;
  @Input() label: string;
  @Input() name: string;
  @Input() placeholder: string;

}
