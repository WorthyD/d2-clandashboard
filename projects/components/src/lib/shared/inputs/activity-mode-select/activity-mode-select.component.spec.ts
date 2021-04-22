import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ActivityModeSelectComponent } from './activity-mode-select.component';

describe('ActivityModeSelectComponent', () => {
  let component: ActivityModeSelectComponent;
  let fixture: ComponentFixture<ActivityModeSelectComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityModeSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityModeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
