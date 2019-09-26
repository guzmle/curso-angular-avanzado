import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommonTableServiceService {
  private subject = new Subject();

  constructor() { }

  get evetFire() {
    return this.subject.asObservable();
  }

  public fireEvent(event: string, obj: any) {
    this.subject.next({event, obj});
  }

}
