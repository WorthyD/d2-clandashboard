import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GambitComponent } from './gambit.component';

describe('GambitComponent', () => {
  let component: GambitComponent;
  let fixture: ComponentFixture<GambitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GambitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GambitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
