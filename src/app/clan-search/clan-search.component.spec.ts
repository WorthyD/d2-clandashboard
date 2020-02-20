import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClanSearchComponent } from './clan-search.component';

xdescribe('ClanSearchComponent', () => {
  let component: ClanSearchComponent;
  let fixture: ComponentFixture<ClanSearchComponent>;

  beforeEach(async(() => {
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
