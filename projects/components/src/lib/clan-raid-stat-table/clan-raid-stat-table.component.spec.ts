import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClanRaidStatTableComponent } from './clan-raid-stat-table.component';

describe('ClanRaidStatTableComponent', () => {
  let component: ClanRaidStatTableComponent;
  let fixture: ComponentFixture<ClanRaidStatTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClanRaidStatTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClanRaidStatTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
