import { TestBed } from '@angular/core/testing';

import { ManifestDatabaseService } from './manifest-database.service';

describe('ManifestDatabaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManifestDatabaseService = TestBed.get(ManifestDatabaseService);
    expect(service).toBeTruthy();
  });
});
