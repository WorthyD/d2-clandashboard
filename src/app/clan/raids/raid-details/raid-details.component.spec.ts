import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RaidDetailsComponent } from './raid-details.component';

describe('RaidDetailsComponent', () => {
  let component: RaidDetailsComponent;
  let fixture: ComponentFixture<RaidDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RaidDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaidDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
