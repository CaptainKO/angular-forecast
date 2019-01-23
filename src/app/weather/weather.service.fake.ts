import { Observable, of } from 'rxjs';

import { IWeatherService } from './weather.service';
import { ICurrentWeather } from '@app/interfaces';

export class WeatherServiceFake implements IWeatherService {
  private fakeWeather: ICurrentWeather = {
    city: 'Bursa',
    country: 'TR',
    date: 1485789600,
    image: 'http://openweathermap.org/img/w/10d.png',
    temperature: 280.32,
    description: 'light intensity drizzle',
  }
  public getCurrentWeather(city: string, country: string): Observable<ICurrentWeather> {
    return of(this.fakeWeather);
  }
}
