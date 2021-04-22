import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RaidDetailsAllComponent } from './raid-details-all.component';

describe('RaidDetailsAllComponent', () => {
  let component: RaidDetailsAllComponent;
  let fixture: ComponentFixture<RaidDetailsAllComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RaidDetailsAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaidDetailsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
