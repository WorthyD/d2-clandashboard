import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClanCrucibleStatsComponent } from './clan-crucible-stats.component';

describe('ClanCrucibleStatsComponent', () => {
  let component: ClanCrucibleStatsComponent;
  let fixture: ComponentFixture<ClanCrucibleStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClanCrucibleStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClanCrucibleStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
