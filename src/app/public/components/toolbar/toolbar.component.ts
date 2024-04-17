import { Component } from '@angular/core';
import {Holidays} from "../../../news/model/holidays.entity";
import {CalendarificApiService} from "../../../news/services/calendarific-api.service";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  holidays : Array<Holidays> = [];

  constructor(private calendarificApi : CalendarificApiService) {
  }

  ngOnInit(){
    this.calendarificApi.getHolidaysForPeru()
      .subscribe((data: any) =>{
          this.holidays = data['response']['holidays'];
          this.holidays.forEach((holiday: any) =>{
            console.log(holiday);
          })
      })
  }
}
