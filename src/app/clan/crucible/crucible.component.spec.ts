import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CrucibleComponent } from './crucible.component';

describe('CrucibleComponent', () => {
  let component: CrucibleComponent;
  let fixture: ComponentFixture<CrucibleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CrucibleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrucibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
