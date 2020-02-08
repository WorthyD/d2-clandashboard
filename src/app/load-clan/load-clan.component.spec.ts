import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadClanComponent } from './load-clan.component';

describe('LoadClanComponent', () => {
  let component: LoadClanComponent;
  let fixture: ComponentFixture<LoadClanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadClanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadClanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
