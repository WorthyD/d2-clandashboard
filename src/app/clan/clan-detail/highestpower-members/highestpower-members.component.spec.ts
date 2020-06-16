import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighestpowerMembersComponent } from './highestpower-members.component';

describe('HighestpowerMembersComponent', () => {
  let component: HighestpowerMembersComponent;
  let fixture: ComponentFixture<HighestpowerMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighestpowerMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighestpowerMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
