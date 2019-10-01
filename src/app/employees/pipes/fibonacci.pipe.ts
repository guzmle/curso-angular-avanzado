import { Pipe, PipeTransform } from '@angular/core';
import { AppUtils } from "../../core/utils";

@Pipe({
  name: 'fibonacci'
})
export class FibonacciPipe implements PipeTransform {

  transform(value: any): any {
    console.log('value');
    return AppUtils.fibonacci(value.code);
  }

}
