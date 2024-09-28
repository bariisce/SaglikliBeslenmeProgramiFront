import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seameals',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './seameals.component.html',
  styleUrl: './seameals.component.scss'
})
export class SeaMealsComponent {
  meals = [
    { id: 1, name: "Grilled Salmon", image: "assets/images/grilled_salmon.jpg",ingredients: ["Salmon fillet", "Olive oil", "Lemon", "Salt", "Pepper"],
      recipe: "1. Preheat the grill. 2. Season the salmon with olive oil, lemon, salt, and pepper. 3. Grill for 6-8 minutes on each side." },
    { id: 2, name: "Lobster Bisque", image: "assets/images/lobster_bisque.jpg", ingredients: ["Lobster", "Butter", "Onion", "Tomato paste", "Cream"],
      recipe: "1. Cook lobster and remove meat. 2. Sauté onion in butter, add tomato paste. 3. Blend and stir in cream." },
    { id: 3, name: "Shrimp Scampi", image: "assets/images/shrimp_scampi.jpg", ingredients: ["Shrimp", "Garlic", "Butter", "Lemon juice", "Parsley"],
      recipe: "1. Sauté garlic in butter. 2. Add shrimp and cook until pink. 3. Stir in lemon juice and parsley." }
  ];

  constructor(private router: Router) {}

  goToMealDetail(meal: any) {
    this.router.navigate(['mealcategories/sea-meals', meal.id], { state: { meal: meal } });
  }
}
