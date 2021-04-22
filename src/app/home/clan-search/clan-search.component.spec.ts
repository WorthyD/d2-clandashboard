import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ClanSearchComponent } from './clan-search.component';

describe('ClanSearchComponent', () => {
  let component: ClanSearchComponent;
  let fixture: ComponentFixture<ClanSearchComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ClanSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClanSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
