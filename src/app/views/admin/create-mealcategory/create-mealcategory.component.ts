import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-mealcategory',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-mealcategory.component.html',
  styleUrls: ['./create-mealcategory.component.scss']
})
export class CreateMealCategoryComponent {

  newCategory = { name: '', description: '' };

  constructor(private router: Router) {}

  addCategory() {
    console.log('Yeni kategori eklendi:', this.newCategory);
    this.router.navigate(['/admin/mealcategory']);
  }

  cancel() {
    this.router.navigate(['/admin/mealcategory']);
  }
}
