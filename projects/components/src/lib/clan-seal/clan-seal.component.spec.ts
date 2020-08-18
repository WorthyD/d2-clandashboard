import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClanSealComponent } from './clan-seal.component';
import { CompletedPipe, CompletionPipe } from './completion.pipe';

describe('ClanSealComponent', () => {
  let component: ClanSealComponent;
  let fixture: ComponentFixture<ClanSealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClanSealComponent, CompletedPipe, CompletionPipe]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClanSealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
