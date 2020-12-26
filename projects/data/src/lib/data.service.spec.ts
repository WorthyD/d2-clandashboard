import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Destiny2Service } from 'bungie-api-angular';
import { of } from 'rxjs';

import { DataService } from './data.service';
import { ManifestDatabaseService } from './services/manifest-database.service';

fdescribe('DataService', () => {
  let service: DataService;
  let apiService: Destiny2Service;
  let dbService: ManifestDatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(DataService);
    apiService = TestBed.inject(Destiny2Service);
    dbService = TestBed.inject(ManifestDatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  describe('requestDefinitionsArchive', () => {
    it('return cached value', async (done) => {
      const dbGetSpy = spyOn(dbService, 'getValues').and.callFake((repo) => {
        console.log('spying');
        return {
          allData: of([{ id: 'v1:blah', data: [] }])
        };
      });
      const dbUpdateSpy = spyOn(dbService, 'update').and.callThrough();

      service.requestDefinitionsArchive('v1:blah', []).subscribe((x) => {
        console.log(x);
        expect(x).toBeTruthy();
        expect(dbGetSpy).toHaveBeenCalledTimes(1);
        expect(dbUpdateSpy).toHaveBeenCalledTimes(0);
        done();
      });
    });

    it('should request new on with new version', async (done) => {});
  });
});
