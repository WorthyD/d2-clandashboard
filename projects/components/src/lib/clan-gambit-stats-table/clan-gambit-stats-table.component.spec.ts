import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ClanGambitStatsTableComponent } from './clan-gambit-stats-table.component';

describe('ClanGambitStatsComponent', () => {
  let component: ClanGambitStatsTableComponent;
  let fixture: ComponentFixture<ClanGambitStatsTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ClanGambitStatsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClanGambitStatsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
