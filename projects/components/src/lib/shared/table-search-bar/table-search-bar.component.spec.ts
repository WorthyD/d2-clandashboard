import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSearchBarComponent } from './table-search-bar.component';

describe('TableSearchBarComponent', () => {
  let component: TableSearchBarComponent;
  let fixture: ComponentFixture<TableSearchBarComponent>;

  beforeEach(async(() => {
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
