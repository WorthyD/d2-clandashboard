import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchErrorDialogComponent } from './search-error-dialog.component';

describe('SearchErrorDialogComponent', () => {
  let component: SearchErrorDialogComponent;
  let fixture: ComponentFixture<SearchErrorDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchErrorDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchErrorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
