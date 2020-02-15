import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberActivityComponent } from './member-activity.component';

describe('MemberActivityComponent', () => {
  let component: MemberActivityComponent;
  let fixture: ComponentFixture<MemberActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
