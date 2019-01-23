import { TestBed } from '@angular/core/testing';

import {  WeatherService } from './weather.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('WheaterService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ],
    providers: []
  }));

  it('should be created', () => {
    const service: WeatherService = TestBed.get(WeatherService);
    expect(service).toBeTruthy();
  });
});
