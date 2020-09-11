import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedClansComponent } from './featured-clans.component';

describe('FeaturedClansComponent', () => {
  let component: FeaturedClansComponent;
  let fixture: ComponentFixture<FeaturedClansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedClansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedClansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
