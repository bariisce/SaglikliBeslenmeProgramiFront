import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMealCategoryComponent } from './update-mealcategory.component';

describe('UpdateMealCategoryComponent', () => {
  let component: UpdateMealCategoryComponent;
  let fixture: ComponentFixture<UpdateMealCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateMealCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateMealCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
