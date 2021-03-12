import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountComparisonComponent } from './count-comparison.component';

describe('CountComparisonComponent', () => {
  let component: CountComparisonComponent;
  let fixture: ComponentFixture<CountComparisonComponent>;

  beforeEach(async(() => {
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
