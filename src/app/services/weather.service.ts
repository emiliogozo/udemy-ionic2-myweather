import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class WeatherService {
  apiKey: String;
  conditionsUrl: String;

  constructor(private http: Http) {
    this.apiKey = '59a34c1c73d1f110';
    this.conditionsUrl = 'http://api.wunderground.com/api/' + this.apiKey + '/conditions/q';
  }

  getWeather(city, state) {
    return this.http.get(this.conditionsUrl + '/' + state + '/' + city + '.json')
      .map(res => res.json());
  }
}