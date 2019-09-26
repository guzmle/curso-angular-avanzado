import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs";
import { ResultList } from "../../../core/intefaces/result-list";
import { Course } from "../../models";

@Injectable({
  providedIn: 'root'
})
export class CourseListService {

  private model = new Subject<ResultList<Course>>();

  constructor() { }

  public get modelChanges(): Observable<ResultList<Course>> {
    return this.model.asObservable();
  }

  public getData() {
    const list: Course[] = [];
    for (let i = 0; i < 10; i++) {
      list.push({id: i, name: 'Course' + 1});
    }

    this.model.next({list});
  }
}
