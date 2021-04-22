import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CountComparisonComponent } from './count-comparison.component';

describe('CountComparisonComponent', () => {
  let component: CountComparisonComponent;
  let fixture: ComponentFixture<CountComparisonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CountComparisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
