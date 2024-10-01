import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-meal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './meal.component.html',
  styleUrl: './meal.component.scss'
})
export class MealComponent{

  /*meals: any[] = [];

  constructor(private mealService: MealService, private router: Router) {}

  ngOnInit() {
    this.getMeals();
  }

  getMeals() {
    this.mealService.getAllMeals().subscribe({
      next: (data) => {
        this.meals = data;
      },
      error: (error) => {
        console.error('Meal listesi alınırken hata oluştu:', error);
      }
    });
  }

  editMeal(id: number) {
    this.router.navigate(['admin/admin-update-meal'], { queryParams: { mealId: id } });
  }

  deleteMeal(id: number) {
    this.mealService.deleteMeal(id).subscribe(
      () => {
        this.meals = this.meals.filter(meal => meal.id !== id);
        console.log(`Meal ID: ${id} başarıyla silindi`);
      },
      (error) => {
        console.error('Meal silinirken hata oluştu:', error);
      }
    );
  }*/
}
