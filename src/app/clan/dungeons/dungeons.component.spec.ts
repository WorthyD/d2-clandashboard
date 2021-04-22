import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DungeonsComponent } from './dungeons.component';

describe('DungeonsComponent', () => {
  let component: DungeonsComponent;
  let fixture: ComponentFixture<DungeonsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DungeonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DungeonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
