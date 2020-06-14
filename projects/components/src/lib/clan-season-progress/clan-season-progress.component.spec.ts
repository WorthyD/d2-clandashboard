import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClanSeasonProgressComponent } from './clan-season-progress.component';

describe('ClanSeasonProgressComponent', () => {
  let component: ClanSeasonProgressComponent;
  let fixture: ComponentFixture<ClanSeasonProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClanSeasonProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClanSeasonProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
