import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileUpdaterComponent } from './profile-updater.component';

describe('ProfileUpdaterComponent', () => {
  let component: ProfileUpdaterComponent;
  let fixture: ComponentFixture<ProfileUpdaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileUpdaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileUpdaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
