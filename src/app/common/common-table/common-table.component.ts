import { Component, Input, OnInit } from '@angular/core';
import { CommonTableServiceService } from "./common-table-service.service";

@Component({
  selector: 'app-common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.css']
})
export class CommonTableComponent implements OnInit {

  @Input() headers;
  @Input() data: any;
  @Input() actions: Array<{ action: string, label: string }>;

  constructor(private readonly service: CommonTableServiceService) { }

  ngOnInit() {
  }

  public getAtributos(data) {
    return Object.keys(data);
  }

  public clickButtonAction(event, obj) {
    this.service.fireEvent(event.action, obj);
  }
}
