import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClanGambitStatsTableComponent } from './clan-gambit-stats-table.component';

describe('ClanGambitStatsComponent', () => {
  let component: ClanGambitStatsTableComponent;
  let fixture: ComponentFixture<ClanGambitStatsTableComponent>;

  beforeEach(async(() => {
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
