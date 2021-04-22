import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ClassCellComponent, ClassIconPipe } from './class-cell.component';
describe('ClassCellComponent', () => {
  let component: ClassCellComponent;
  let fixture: ComponentFixture<ClassCellComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ClassCellComponent, ClassIconPipe],
      imports: []
    }).compileComponents();
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
