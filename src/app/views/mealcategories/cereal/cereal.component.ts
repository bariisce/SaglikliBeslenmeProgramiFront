import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cereal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cereal.component.html',
  styleUrl: './cereal.component.scss'
})
export class CerealComponent {
  meals = [
    {
      id: 1,
      name: "Oatmeal",
      image: "assets/images/oatmeal.jpg",
      ingredients: ["Oats", "Milk", "Honey", "Banana"],
      recipe: "1. Cook oats in milk. 2. Sweeten with honey and top with banana."
    },
    {
      id: 2,
      name: "Granola",
      image: "assets/images/granola.jpg",
      ingredients: ["Oats", "Nuts", "Honey", "Dried fruit"],
      recipe: "1. Mix oats, nuts, and honey. 2. Bake until golden and mix in dried fruit."
    }
  ];

  constructor(private router: Router) {}

  goToMealDetail(meal: any) {
    this.router.navigate(['mealcategories/cereal-meals', meal.id], { state: { meal: meal } });
  }
}
