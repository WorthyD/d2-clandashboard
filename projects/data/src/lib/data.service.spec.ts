import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Destiny2Service } from 'bungie-api-angular';
import { defer, of } from 'rxjs';

import { DataService } from './data.service';
import { WindowToken } from './injection-tokens/window-token';
import { ManifestDatabaseService } from './services/manifest-database.service';
import { NO_WINDOW_MOCK } from './injection-tokens/mock-window-token';

describe('DataService', () => {
  let service: DataService;
  let apiService: Destiny2Service;
  let dbService: ManifestDatabaseService;
  let win;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: WindowToken, useValue: NO_WINDOW_MOCK }]
    });
    service = TestBed.inject(DataService);
    apiService = TestBed.inject(Destiny2Service);
    dbService = TestBed.inject(ManifestDatabaseService);
    win = TestBed.inject(WindowToken);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  describe('requestDefinitionsArchive', () => {
    it('return cached value', async (done) => {
      const dbGetSpy = spyOn(dbService, 'getValues').and.callFake((repo) => {
        return new Promise((res, rej) => {
          res([{ id: 'v1:blah', data: [] }]);
        });
      });
      const dbUpdateSpy = spyOn(dbService, 'update').and.callThrough();

      service.requestDefinitionsArchive('blah', []).then((x) => {
        expect(x).toBeTruthy();
        expect(dbGetSpy).toHaveBeenCalledTimes(1);
        expect(dbUpdateSpy).toHaveBeenCalledTimes(0);
        done();
      });
    });

    it('should request new on with new version', async (done) => {
      const dbGetSpy = spyOn(dbService, 'getValues').and.callFake((repo) => {
        return new Promise((res, rej) => {
          res([{ id: 'v1:blah', data: [] }]);
        });
      });
      const winSpy = spyOn(win, 'fetch').and.callFake((stuff) => {
        return new Promise((res, rej) => {
          res({
            json: () =>
              new Promise((res2, rej2) => {
                res2('res2');
              })
          });
        });
      });
      const dbUpdateSpy = spyOn(dbService, 'update').and.callThrough();

      service.requestDefinitionsArchive('v2:blah', []).then((x) => {
        expect(x).toBeTruthy();
        expect(dbGetSpy).toHaveBeenCalledTimes(1);
        expect(dbUpdateSpy).toHaveBeenCalledTimes(1);
        done();
      });
    });
  });
});
