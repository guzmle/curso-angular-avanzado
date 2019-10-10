import {Input} from '@angular/core';

export class ListComponent<T> {

  @Input() public model: T;

}
