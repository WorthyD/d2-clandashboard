import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberActivityHeatmapComponent } from './member-activity-heatmap.component';

describe('MemberActivityHeatmapComponent', () => {
  let component: MemberActivityHeatmapComponent;
  let fixture: ComponentFixture<MemberActivityHeatmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberActivityHeatmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberActivityHeatmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
