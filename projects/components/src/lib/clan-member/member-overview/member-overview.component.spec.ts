import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberOverviewComponent } from './member-overview.component';

describe('MemberOverviewComponent', () => {
  let component: MemberOverviewComponent;
  let fixture: ComponentFixture<MemberOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
