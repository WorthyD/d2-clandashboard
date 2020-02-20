import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClanWeeklyProgressComponent } from './clan-weekly-progress.component';

describe('ClanWeeklyProgressComponent', () => {
  let component: ClanWeeklyProgressComponent;
  let fixture: ComponentFixture<ClanWeeklyProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClanWeeklyProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClanWeeklyProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
