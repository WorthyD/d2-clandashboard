import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ActivityTimeChartComponent } from './activity-time-chart.component';

describe('ClanActivityTimeChartComponent', () => {
  let component: ActivityTimeChartComponent;
  let fixture: ComponentFixture<ActivityTimeChartComponent>;

  beforeEach(waitForAsync(() => {
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
