import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RaidCardComponent } from './raid-card.component';

describe('RaidCardComponent', () => {
  let component: RaidCardComponent;
  let fixture: ComponentFixture<RaidCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RaidCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaidCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
