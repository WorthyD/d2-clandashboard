import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BungieParseComponent } from './bungie-parse.component';

describe('BungieParseComponent', () => {
  let component: BungieParseComponent;
  let fixture: ComponentFixture<BungieParseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BungieParseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BungieParseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
