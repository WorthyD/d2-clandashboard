import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityTimeChartComponent } from './activity-time-chart.component';

describe('ActivityTimeChartComponent', () => {
  let component: ActivityTimeChartComponent;
  let fixture: ComponentFixture<ActivityTimeChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityTimeChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityTimeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
