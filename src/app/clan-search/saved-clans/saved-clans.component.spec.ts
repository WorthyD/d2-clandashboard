import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SavedClansComponent } from './saved-clans.component';

describe('SavedClansComponent', () => {
  let component: SavedClansComponent;
  let fixture: ComponentFixture<SavedClansComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedClansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedClansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
