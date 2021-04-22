import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ClanMemberActivityComponent } from './clan-member-activity.component';

describe('ClanMemberActivityComponent', () => {
  let component: ClanMemberActivityComponent;
  let fixture: ComponentFixture<ClanMemberActivityComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ClanMemberActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClanMemberActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
