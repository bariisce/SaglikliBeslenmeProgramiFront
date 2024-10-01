import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietPlanComponent } from './dietplan.component';
import { DietplanComponent } from '../../patient/dietplan/dietplan.component';

describe('DietplanComponent', () => {
  let component: DietplanComponent;
  let fixture: ComponentFixture<DietplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DietplanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DietplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
