import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SeasonPassComponent } from './season-pass.component';

describe('SeasonPassComponent', () => {
  let component: SeasonPassComponent;
  let fixture: ComponentFixture<SeasonPassComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SeasonPassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
