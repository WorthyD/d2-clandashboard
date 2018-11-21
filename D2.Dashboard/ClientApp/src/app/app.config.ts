import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppConfig {

  constructor() {

    if (location.port && (location.port === '3000') || (location.port === '4200')) {
      // this.urls.baseUrl = 'http://localhost:5000/'; // kestrel
    }

  }
  urls = {
    baseUrl: './',
    clan: 'api/clan/get',
    url: (name, parm1?, parm2?, parm3?) => {
      let url = this.urls.baseUrl + this.urls[name];
      if (parm1) {
        url += '/' + parm1;
      }
      if (parm2) {
        url += '/' + parm2;
      }
      if (parm3) {
        url += '/' + parm3;
      }

      return url;
    }
  };
}
