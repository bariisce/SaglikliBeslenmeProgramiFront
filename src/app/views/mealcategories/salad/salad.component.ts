import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-salad',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './salad.component.html',
  styleUrl: './salad.component.scss'
})
export class SaladComponent {
  meals = [
    {
      id: 1,
      name: "Caesar Salad",
      image: "assets/images/caesar_salad.jpg",
      ingredients: ["Romaine lettuce", "Croutons", "Parmesan cheese", "Caesar dressing"],
      recipe: "1. Toss lettuce with croutons and dressing. 2. Top with Parmesan cheese."
    },
    {
      id: 2,
      name: "Greek Salad",
      image: "assets/images/greek_salad.jpg",
      ingredients: ["Tomatoes", "Cucumbers", "Feta cheese", "Olives", "Onion"],
      recipe: "1. Combine all ingredients in a bowl. 2. Drizzle with olive oil and season."
    }
  ];

  constructor(private router: Router) {}

  goToMealDetail(meal: any) {
    this.router.navigate(['mealcategories/salads', meal.id], { state: { meal: meal } });
  }
}
