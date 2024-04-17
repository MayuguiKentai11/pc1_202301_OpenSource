import { TestBed } from '@angular/core/testing';

import { CalendarificApiService } from './calendarific-api.service';

describe('CalendarificApiService', () => {
  let service: CalendarificApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalendarificApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
