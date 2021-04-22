import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TableSearchBarComponent } from './table-search-bar.component';

describe('TableSearchBarComponent', () => {
  let component: TableSearchBarComponent;
  let fixture: ComponentFixture<TableSearchBarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TableSearchBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
