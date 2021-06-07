import { TestBed } from '@angular/core/testing';

import { PlayerActivityService } from './player-activity.service';

describe('PlayerActivityService', () => {
  let service: PlayerActivityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerActivityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
