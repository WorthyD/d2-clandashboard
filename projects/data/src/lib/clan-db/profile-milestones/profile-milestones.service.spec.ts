import { TestBed } from '@angular/core/testing';

import { ProfileMilestonesService } from './profile-milestones.service';

describe('ProfileMilestonesService', () => {
  let service: ProfileMilestonesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileMilestonesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
