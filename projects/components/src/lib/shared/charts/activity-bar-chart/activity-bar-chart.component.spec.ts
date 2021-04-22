import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ActivityBarChartComponent } from './activity-bar-chart.component';

describe('ActivityBarChartComponent', () => {
  let component: ActivityBarChartComponent;
  let fixture: ComponentFixture<ActivityBarChartComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
