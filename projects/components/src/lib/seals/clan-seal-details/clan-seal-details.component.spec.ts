import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClanSealDetailsComponent } from './clan-seal-details.component';

describe('ClanSealDetailsComponent', () => {
  let component: ClanSealDetailsComponent;
  let fixture: ComponentFixture<ClanSealDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClanSealDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClanSealDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
