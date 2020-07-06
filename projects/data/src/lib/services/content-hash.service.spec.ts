import { TestBed } from '@angular/core/testing';

import { ContentHashService } from './content-hash.service';

describe('ContentHashService', () => {
  let service: ContentHashService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContentHashService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
