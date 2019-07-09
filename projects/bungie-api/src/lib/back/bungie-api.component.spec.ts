import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BungieApiComponent } from './bungie-api.component';

describe('BungieApiComponent', () => {
  let component: BungieApiComponent;
  let fixture: ComponentFixture<BungieApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BungieApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BungieApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
