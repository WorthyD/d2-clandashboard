import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClanRosterListViewComponent } from './clan-roster-list-view.component';

describe('ClanRosterListViewComponent', () => {
  let component: ClanRosterListViewComponent;
  let fixture: ComponentFixture<ClanRosterListViewComponent>;

  beforeEach(async(() => {
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
