import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-legume',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './legume.component.html',
  styleUrl: './legume.component.scss'
})
export class LegumeComponent {
  meals = [
    {
      id: 1,
      name: "Barbunya",
      image: "assets/images/barbunya.jpg",
      ingredients: ["Lentils", "Onion", "Carrots", "Garlic", "Broth"],
      recipe: "1. Sauté onion and garlic. 2. Add lentils and broth. 3. Simmer until lentils are soft."
    },
    {
      id: 2,
      name: "Nohut",
      image: "assets/images/nohut.jpg",
      ingredients: ["Chickpeas", "Tomatoes", "Cucumber", "Olive oil", "Lemon juice"],
      recipe: "1. Combine all ingredients. 2. Toss with olive oil and lemon juice."
    }
  ];

  constructor(private router: Router) {}

  goToMealDetail(meal: any) {
    this.router.navigate(['mealcategories/legume', meal.id], { state: { meal: meal } });
  }
}
