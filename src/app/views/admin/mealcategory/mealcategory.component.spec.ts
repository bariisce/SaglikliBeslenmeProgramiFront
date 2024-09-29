import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealcategoryComponent } from './mealcategory.component';

describe('MealcategoryComponent', () => {
  let component: MealcategoryComponent;
  let fixture: ComponentFixture<MealcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MealcategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
