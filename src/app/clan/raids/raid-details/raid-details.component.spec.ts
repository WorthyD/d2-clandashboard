import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaidDetailsComponent } from './raid-details.component';

describe('RaidDetailsComponent', () => {
  let component: RaidDetailsComponent;
  let fixture: ComponentFixture<RaidDetailsComponent>;

  beforeEach(async(() => {
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
