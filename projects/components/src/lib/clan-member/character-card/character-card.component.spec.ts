import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CharacterCardComponent } from './character-card.component';
import { PipesModule } from '../../pipes/pipes.module';
describe('CharacterCardComponent', () => {
  let component: CharacterCardComponent;
  let fixture: ComponentFixture<CharacterCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterCardComponent],
      imports: [PipesModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
