import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ClanDetailComponent } from './clan-detail.component';

xdescribe('ClanDetailComponent', () => {
  let component: ClanDetailComponent;
  let fixture: ComponentFixture<ClanDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ClanDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClanDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
