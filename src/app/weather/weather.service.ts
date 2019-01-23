import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ICurrentWeatherData, ICurrentWeather } from '@app/interfaces';
import { environment as env } from "@env/environment";
import { Observable } from "rxjs/Observable";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class WeatherService implements IWeatherService {
  private apiUrl = `${env.baseUrl}api.openweathermap.org/data/2.5/weather?`
  // only accept .png extension
  private imgIconUrl = `${env.baseUrl}http://openweathermap.org/img/w/`
  constructor(
    private http : HttpClient
  ) { }

  getCurrentWeather(city , country){
    var url = this.apiUrl  + `q=${city},${country}`+ `&appid=${env.appId}`;
    console.log(url);
    return this.http.get<ICurrentWeatherData>(url)
      .pipe(
        map(
          (data: any) => this.transformToICurrentWeather(data)
        )
      );
  }


  private transformToICurrentWeather(data: ICurrentWeatherData) {
    return {
      city: data.name,
      country: data.sys.country,
      date: data.dt * 1000,
      image: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
      temperature: this.convertKtoF(data.main.temp),
      description: data.weather[0].description

    } as ICurrentWeather
  }

  // private generateIconImage(icon: string) {
  //   return `${this.imgIconUrl}${icon}.png`
  // }
  private convertKtoF(kelvin: number) {
    return kelvin * 9/5 - 459.67;
  }
}
export interface IWeatherService {
  getCurrentWeather(city: string, country: string): Observable<ICurrentWeather>
}
