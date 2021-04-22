import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RecentlyActiveMembersComponent } from './recently-active-members.component';

describe('RecentlyActiveMembersComponent', () => {
  let component: RecentlyActiveMembersComponent;
  let fixture: ComponentFixture<RecentlyActiveMembersComponent>;

  beforeEach(waitForAsync(() => {
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

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
