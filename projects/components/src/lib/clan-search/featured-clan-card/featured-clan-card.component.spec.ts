import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedClanCardComponent } from './featured-clan-card.component';

describe('FeaturedClanCardComponent', () => {
  let component: FeaturedClanCardComponent;
  let fixture: ComponentFixture<FeaturedClanCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedClanCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedClanCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
