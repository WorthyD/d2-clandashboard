import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberActivityHeatMapComponent } from './member-activity-heat-map.component';

describe('MemberActivityHeatMapComponent', () => {
  let component: MemberActivityHeatMapComponent;
  let fixture: ComponentFixture<MemberActivityHeatMapComponent>;

  beforeEach(async(() => {
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
