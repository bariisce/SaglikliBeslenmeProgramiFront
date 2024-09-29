import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMealCategoryComponent } from './create-mealcategory.component';

describe('CreateMealcategoryComponent', () => {
  let component: CreateMealCategoryComponent;
  let fixture: ComponentFixture<CreateMealCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateMealCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateMealCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
