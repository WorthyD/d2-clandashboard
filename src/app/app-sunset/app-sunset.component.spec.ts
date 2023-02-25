import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSunsetComponent } from './app-sunset.component';

describe('AppSunsetComponent', () => {
  let component: AppSunsetComponent;
  let fixture: ComponentFixture<AppSunsetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppSunsetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSunsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
