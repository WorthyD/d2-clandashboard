import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerDetailsContainerComponent } from './player-details-container.component';

describe('PlayerDetailsContainerComponent', () => {
  let component: PlayerDetailsContainerComponent;
  let fixture: ComponentFixture<PlayerDetailsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerDetailsContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerDetailsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
