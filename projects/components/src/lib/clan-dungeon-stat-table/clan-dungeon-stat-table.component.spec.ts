import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ClanDungeonStatTableComponent } from './clan-dungeon-stat-table.component';

describe('ClanDungeonStatTableComponent', () => {
  let component: ClanDungeonStatTableComponent;
  let fixture: ComponentFixture<ClanDungeonStatTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ClanDungeonStatTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClanDungeonStatTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
