import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chicken',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chicken.component.html',
  styleUrl: './chicken.component.scss'
})
export class ChickenComponent {
  meals = [
    {
      id: 1,
      name: "Grilled Chicken",
      image: "assets/images/grilled_chicken.jpg",
      ingredients: ["Chicken breast", "Olive oil", "Garlic", "Rosemary", "Salt", "Pepper"],
      recipe: "1. Marinate chicken with olive oil, garlic, rosemary, salt, and pepper. 2. Grill for 6-8 minutes each side."
    },
    {
      id: 2,
      name: "Chicken Curry",
      image: "assets/images/chicken_curry.jpg",
      ingredients: ["Chicken", "Curry powder", "Coconut milk", "Onion", "Garlic"],
      recipe: "1. Sauté onion and garlic. 2. Add chicken and curry powder. 3. Pour in coconut milk and simmer."
    }
  ];

  constructor(private router: Router) {}

  goToMealDetail(meal: any) {
    this.router.navigate(['mealcategories/chicken-meals', meal.id], { state: { meal: meal } });
  }
}
