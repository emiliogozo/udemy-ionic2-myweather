import { Component } from '@angular/core';

import { WeatherService } from '../../app/services/weather.service';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'weather',
  templateUrl: 'weather.html'
})
export class WeatherPage {
  city: String;
  state: String;
  weather: any;
  searchStr: String;
  results: any;

  constructor(
    public navCtrl: NavController,
    private weatherService: WeatherService) {
    this.city = 'Boston';
    this.state = 'MA';
  }

  ngOnInit() {
    this.weatherService.getWeather(this.city, this.state).subscribe(weather => {
      this.weather = weather.current_observation;
    });
  }

  getQuery() {
    this.weatherService.searchCities(this.searchStr)
      .subscribe(res => {
        this.results = res.RESULTS;
      });
  }

}
