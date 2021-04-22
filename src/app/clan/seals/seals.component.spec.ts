import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SealsComponent } from './seals.component';

describe('SealsComponent', () => {
  let component: SealsComponent;
  let fixture: ComponentFixture<SealsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SealsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
