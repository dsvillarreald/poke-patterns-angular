import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BattleDemoComponent } from './battle-demo.component';

describe('DemoComponent', () => {
  let component: BattleDemoComponent;
  let fixture: ComponentFixture<BattleDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BattleDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BattleDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
