import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ClanMembersCardComponent } from './clan-members-card.component';

describe('ClanMembersCardComponent', () => {
  let component: ClanMembersCardComponent;
  let fixture: ComponentFixture<ClanMembersCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ClanMembersCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClanMembersCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
