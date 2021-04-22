import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ClanRaidDetailsTableComponent } from './clan-raid-details-table.component';

describe('ClanRaidDetailsTableComponent', () => {
  let component: ClanRaidDetailsTableComponent;
  let fixture: ComponentFixture<ClanRaidDetailsTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ClanRaidDetailsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClanRaidDetailsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
