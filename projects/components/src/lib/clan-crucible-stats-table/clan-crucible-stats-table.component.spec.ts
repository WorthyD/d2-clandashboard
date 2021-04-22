import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ClanCrucibleStatsTableComponent } from './clan-crucible-stats-table.component';

describe('ClanCrucibleStatsComponent', () => {
  let component: ClanCrucibleStatsTableComponent;
  let fixture: ComponentFixture<ClanCrucibleStatsTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ClanCrucibleStatsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClanCrucibleStatsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
