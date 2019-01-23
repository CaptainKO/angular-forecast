import { Component, OnInit } from '@angular/core';

import { ICurrentWeather } from "@app/interfaces";
import { WeatherService } from '@app/weather/weather.service';
@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {

  current : ICurrentWeather;
  constructor(private weatherService: WeatherService) {
    this.current = {
      city: '',
      country: '',
      date: new Date(),
      image: 'assets/img/sunny.svg',
      temperature: 0,
      description: 'sunny',
    } as ICurrentWeather
    this.weatherService
      .getCurrentWeather('London', 'uk')
        .subscribe((data) => this.current = data);
   }

  ngOnInit() {}

}
