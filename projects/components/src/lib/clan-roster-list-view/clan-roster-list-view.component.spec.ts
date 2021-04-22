import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ClanRosterListViewComponent } from './clan-roster-list-view.component';

describe('ClanRosterListViewComponent', () => {
  let component: ClanRosterListViewComponent;
  let fixture: ComponentFixture<ClanRosterListViewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ClanRosterListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClanRosterListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
