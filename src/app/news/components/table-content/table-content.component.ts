import {Component, Input} from '@angular/core';
import {Holidays} from "../../model/holidays.entity";

@Component({
  selector: 'app-table-content',
  templateUrl: './table-content.component.html',
  styleUrl: './table-content.component.css'
})
export class TableContentComponent {
  @Input() holidays:Array<Holidays> = [];

  columnsToDisplay = ['holidayName','holidayDescription','holidayDate','holidayType'];

}
