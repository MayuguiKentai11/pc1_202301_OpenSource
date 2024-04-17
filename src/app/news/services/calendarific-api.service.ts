import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CalendarificApiService {

  apiKey = 'u2Ofc6kOeca4QbgG7XCuUPJtvynJKlvx';

  baseUrl = 'https://calendarific.com/api/v2/';

  constructor(private http: HttpClient) { }

  getHolidaysByCountry(country : string){
    return this.http.get(`${this.baseUrl}holidays?api_key=${this.apiKey}&country=${country}&year=2019`);
  }

  getHolidaysForPeru(){
    return this.getHolidaysByCountry('pe');
  }

}
