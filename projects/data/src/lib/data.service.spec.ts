import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Destiny2Service } from 'bungie-api-angular';

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
    it('Should request an api call', () => {

    });
  });
});
