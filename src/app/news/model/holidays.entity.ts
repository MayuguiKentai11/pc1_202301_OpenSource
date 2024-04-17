import {Country} from "./country.entity";
import {Date} from "./date.entity";

export class Holidays {

  name : string;

  description : string;

  country : Country;

  date : Date;

  type: Array<string>;

  constructor() {
    this.name = '';
    this.description = '';
    this.country = new Country();
    this.date = new Date();
    this.type = [];
  }

}
