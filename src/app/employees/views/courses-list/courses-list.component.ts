import { Component, OnInit } from '@angular/core';
import { CourseListService } from "./course-list.service";
import { ListComponent } from "../../../core/types/list.component";
import { ResultList } from "../../../core/intefaces/result-list";
import { Course } from "../../models";
import { CommonTableServiceService } from "../../../common/common-table/common-table-service.service";

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent extends ListComponent<Course> implements OnInit {

  modelo: ResultList<Course>;

  constructor(private readonly service: CourseListService,
              private tableService: CommonTableServiceService) {
    super();
    this.service.modelChanges.subscribe((value) => this.modelo = value);
    this.tableService.evetFire.subscribe((value: any) =>{

      // De esta manera evitamos el switch
      // value.event debe concordar con el nombre de algun metodo de la clase
      this[value.event](value);
    });
  }

  ngOnInit() {
    this.service.getData();
    console.log(this.modelo);
  }

  delete(obj) {

  }

  update(obj) {
    console.log(obj);
  }
}
