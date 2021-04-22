import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MemberActivityHeatMapComponent } from './member-activity-heat-map.component';

describe('MemberActivityHeatMapComponent', () => {
  let component: MemberActivityHeatMapComponent;
  let fixture: ComponentFixture<MemberActivityHeatMapComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberActivityHeatMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberActivityHeatMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
