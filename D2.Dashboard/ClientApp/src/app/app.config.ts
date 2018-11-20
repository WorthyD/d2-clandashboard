import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppConfig {

  constructor() {

    if (location.port && (location.port === '3000') || (location.port === '4200')) {
      this.urls.baseUrl = 'http://localhost:5000/'; // kestrel
    }

  }
  urls = {
    baseUrl: './'
  };
}
