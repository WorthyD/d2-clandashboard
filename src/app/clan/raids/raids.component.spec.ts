import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RaidsComponent } from './raids.component';

describe('RaidsComponent', () => {
  let component: RaidsComponent;
  let fixture: ComponentFixture<RaidsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RaidsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
