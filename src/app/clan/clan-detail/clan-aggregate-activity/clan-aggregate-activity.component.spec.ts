import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ClanAggregateActivityComponent } from './clan-aggregate-activity.component';

describe('ClanAggregateActivityComponent', () => {
  let component: ClanAggregateActivityComponent;
  let fixture: ComponentFixture<ClanAggregateActivityComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ClanAggregateActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClanAggregateActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
