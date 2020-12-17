import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaidDetailsAllComponent } from './raid-details-all.component';

describe('RaidDetailsAllComponent', () => {
  let component: RaidDetailsAllComponent;
  let fixture: ComponentFixture<RaidDetailsAllComponent>;

  beforeEach(async(() => {
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
