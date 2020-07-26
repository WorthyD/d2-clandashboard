import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClanSealComponent } from './clan-seal.component';

describe('ClanSealComponent', () => {
  let component: ClanSealComponent;
  let fixture: ComponentFixture<ClanSealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClanSealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClanSealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
