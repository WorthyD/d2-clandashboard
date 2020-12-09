import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityModeSelectComponent } from './activity-mode-select.component';

describe('ActivityModeSelectComponent', () => {
  let component: ActivityModeSelectComponent;
  let fixture: ComponentFixture<ActivityModeSelectComponent>;

  beforeEach(async(() => {
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
