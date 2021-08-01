import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClanSealTableComponent } from './clan-seal-table.component';

describe('ClanSealTableComponent', () => {
  let component: ClanSealTableComponent;
  let fixture: ComponentFixture<ClanSealTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClanSealTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClanSealTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
