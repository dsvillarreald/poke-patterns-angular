import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatternSelectorComponent } from './pattern-selector.component';

describe('MenuComponent', () => {
  let component: PatternSelectorComponent;
  let fixture: ComponentFixture<PatternSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatternSelectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatternSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
