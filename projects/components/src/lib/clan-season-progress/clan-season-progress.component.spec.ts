import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ClanSeasonProgressComponent } from './clan-season-progress.component';

describe('ClanSeasonProgressComponent', () => {
  let component: ClanSeasonProgressComponent;
  let fixture: ComponentFixture<ClanSeasonProgressComponent>;

  beforeEach(waitForAsync(() => {
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
