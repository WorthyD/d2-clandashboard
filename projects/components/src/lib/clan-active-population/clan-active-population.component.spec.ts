import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClanActivePopulationComponent } from './clan-active-population.component';

describe('ClanActivePopulationComponent', () => {
  let component: ClanActivePopulationComponent;
  let fixture: ComponentFixture<ClanActivePopulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClanActivePopulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClanActivePopulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
