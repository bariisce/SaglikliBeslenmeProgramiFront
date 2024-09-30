import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mealcategory',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './mealcategory.component.html',
  styleUrls: ['./mealcategory.component.scss']
})
export class MealCategoryComponent {

  constructor(private router: Router) {}

  categories = [
    { id: 1, name: 'Beef', description: 'Beef-based meals' },
    { id: 2, name: 'Chicken', description: 'Chicken-based meals' },
    { id: 3, name: 'Soup', description: 'Various soup dishes' },
    { id: 4, name: 'Salad', description: 'Sağlıklı salatalar' },
    { id: 5, name: 'Sea Meals', description: 'omega3 yağınca zengin deniz yemekleri' },
    { id: 6, name: 'Cereal', description: 'Harika tahıl yemekleri' },
    { id: 7, name: 'Legume', description: 'Yüksek proteinli bakliyat yemekleri' },
  ];

  goToAddCategory() {
    this.router.navigate(['/admin/create-mealcategory']);
  }

  editCategory(category: any) {
    this.router.navigate(['/admin/update-mealcategory', category.id, { category: JSON.stringify(category) }]);
  }

  deleteCategory(category: any) {
    console.log(`Silinen kategori: ${category.name}`);
    this.categories = this.categories.filter(c => c.id !== category.id);
  }
}
