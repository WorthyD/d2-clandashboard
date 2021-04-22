import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ClanRosterActivityTableComponent } from './clan-roster-activity-table.component';

describe('ClanRosterActivityTableComponent', () => {
  let component: ClanRosterActivityTableComponent;
  let fixture: ComponentFixture<ClanRosterActivityTableComponent>;

  beforeEach(waitForAsync(() => {
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
