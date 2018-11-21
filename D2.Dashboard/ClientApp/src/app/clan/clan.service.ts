import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AppConfig } from '../app.config';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Clan } from '../shared/entities/clan';

@Injectable({
  providedIn: 'root'
})
export class ClanService {

  clan: Clan = new Clan();
  constructor(private http: HttpClient, private config: AppConfig) { }

  getClan(clanId: number): Observable<any> {
    return this.http.get<Clan>(this.config.urls.url('clan', clanId))
      .pipe(
        map(clan => this.clan = clan)
      );
  }
}
