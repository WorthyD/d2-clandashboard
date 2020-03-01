import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassCellComponent } from './class-cell.component';

describe('ClassCellComponent', () => {
  let component: ClassCellComponent;
  let fixture: ComponentFixture<ClassCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
