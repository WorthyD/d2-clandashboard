import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberCalloutComponent } from './member-callout.component';

describe('MemberCalloutComponent', () => {
  let component: MemberCalloutComponent;
  let fixture: ComponentFixture<MemberCalloutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberCalloutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberCalloutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
