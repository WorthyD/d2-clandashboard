import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentlyActiveMembersComponent } from './recently-active-members.component';

describe('RecentlyActiveMembersComponent', () => {
  let component: RecentlyActiveMembersComponent;
  let fixture: ComponentFixture<RecentlyActiveMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentlyActiveMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentlyActiveMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
