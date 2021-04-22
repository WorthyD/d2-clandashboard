import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ClanRosterComponent } from './clan-roster.component';

xdescribe('ClanRosterComponent', () => {
  let component: ClanRosterComponent;
  let fixture: ComponentFixture<ClanRosterComponent>;

  beforeEach(waitForAsync(() => {
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
