import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-soup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './soup.component.html',
  styleUrl: './soup.component.scss'
})
export class SoupComponent {
  meals = [
    {
      id: 1,
      name: "Tomato Soup",
      image: "assets/images/tomato_soup.jpg",
      ingredients: ["Tomatoes", "Onion", "Garlic", "Basil", "Cream"],
      recipe: "1. Sauté onion and garlic. 2. Add tomatoes and cook until soft. 3. Blend and add cream."
    },
    {
      id: 2,
      name: "Chicken Noodle Soup",
      image: "assets/images/chicken_noodle_soup.jpg",
      ingredients: ["Chicken", "Noodles", "Carrots", "Celery", "Broth"],
      recipe: "1. Cook chicken in broth. 2. Add vegetables and noodles. 3. Simmer until noodles are cooked."
    }
  ];

  constructor(private router: Router) {}

  goToMealDetail(meal: any) {
    this.router.navigate(['mealcategories/soups', meal.id], { state: { meal: meal } });
  }
}
