import { TestBed } from '@angular/core/testing';

import { ClanDungeonService } from './clan-dungeon.service';

describe('ClanDungeonService', () => {
  let service: ClanDungeonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClanDungeonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
