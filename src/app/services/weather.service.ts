import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class WeatherService {
  apiKey: String;
  conditionsUrl: String;
  searchUrl: String;

  constructor(private http: Http) {
    this.apiKey = '59a34c1c73d1f110';
    this.conditionsUrl = 'http://api.wunderground.com/api/' + this.apiKey + '/conditions/q';
    this.searchUrl = 'http://localhost:8100/search/aq?query=';
  }

  getWeather(zmw) {
    return this.http.get(this.conditionsUrl + '/zmw:' + zmw + '.json')
      .map(res => res.json());
  }

  searchCities(searchStr) {
    return this.http.get(this.searchUrl + searchStr)
      .map(res => res.json());
  }
}