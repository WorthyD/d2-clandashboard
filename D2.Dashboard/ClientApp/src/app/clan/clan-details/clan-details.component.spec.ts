import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClanDetailsComponent } from './clan-details.component';

describe('ClanDetailsComponent', () => {
  let component: ClanDetailsComponent;
  let fixture: ComponentFixture<ClanDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClanDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClanDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
