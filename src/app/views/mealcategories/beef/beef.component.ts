import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-beef',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './beef.component.html',
  styleUrls: ['./beef.component.scss']
})
export class BeefComponent {
  constructor(private router: Router) {}

  beefMeals = [
    { id: 1, name: 'Beef Stew', image: 'assets/images/beefstew.jpg', ingredients: ['Beef', 'Onion', 'Garlic'], recipe: 'Cook beef with onion and garlic.' },
    { id: 2, name: 'Grilled Beef', image: 'assets/images/beefgrilled.jpg', ingredients: ['Beef', 'Salt', 'Pepper'], recipe: 'Grill beef with salt and pepper.' }
  ];

  goToMealDetail(meal: any) {
    this.router.navigate(['mealcategories/beef', meal.id], { state: { meal } });
  }
}
