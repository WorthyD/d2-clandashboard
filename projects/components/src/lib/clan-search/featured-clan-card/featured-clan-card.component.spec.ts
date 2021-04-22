import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FeaturedClanCardComponent } from './featured-clan-card.component';

describe('FeaturedClanCardComponent', () => {
  let component: FeaturedClanCardComponent;
  let fixture: ComponentFixture<FeaturedClanCardComponent>;

  beforeEach(waitForAsync(() => {
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
