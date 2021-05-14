import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerActivityComponent } from './player-activity.component';

describe('PlayerActivityComponent', () => {
  let component: PlayerActivityComponent;
  let fixture: ComponentFixture<PlayerActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
