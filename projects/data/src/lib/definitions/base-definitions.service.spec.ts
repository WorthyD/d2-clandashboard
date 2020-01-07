import { TestBed } from '@angular/core/testing';

import { BaseDefinitionsService } from './base-definitions.service';

describe('BaseDefinitionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BaseDefinitionsService = TestBed.get(BaseDefinitionsService);
    expect(service).toBeTruthy();
  });
});
