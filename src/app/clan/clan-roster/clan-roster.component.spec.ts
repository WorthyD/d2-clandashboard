import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClanRosterComponent } from './clan-roster.component';

describe('ClanRosterComponent', () => {
  let component: ClanRosterComponent;
  let fixture: ComponentFixture<ClanRosterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClanRosterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClanRosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
