import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClanRosterActivityTableComponent } from './clan-roster-activity-table.component';

describe('ClanRosterActivityTableComponent', () => {
  let component: ClanRosterActivityTableComponent;
  let fixture: ComponentFixture<ClanRosterActivityTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClanRosterActivityTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClanRosterActivityTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
