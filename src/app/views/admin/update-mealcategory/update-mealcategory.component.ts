import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-mealcategory',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update-mealcategory.component.html',
  styleUrls: ['./update-mealcategory.component.scss']
})
export class UpdateMealCategoryComponent implements OnInit {

  category: any = { id: '', name: '', description: '' }; // Güncellenecek kategori verileri
  categories = [
    { id: 1, name: 'Beef', description: 'Beef-based meals' },
    { id: 2, name: 'Chicken', description: 'Chicken-based meals' },
    { id: 3, name: 'Soup', description: 'Various soup dishes' },
    { id: 4, name: 'Salad', description: 'Healthy salads' },
    { id: 5, name: 'Sea Meals', description: 'Seafood dishes rich in omega3' },
    { id: 6, name: 'Cereal', description: 'Delicious cereal dishes' },
    { id: 7, name: 'Legume', description: 'High-protein legume dishes' },
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const categoryId = this.route.snapshot.paramMap.get('id'); // URL'den kategori ID'sini al
    if (categoryId) {
      this.category = this.categories.find(c => c.id === +categoryId); // ID'ye göre kategori bul
    }
  }

  updateCategory() {
    console.log('Kategori güncellendi:', this.category);
    this.router.navigate(['/admin/mealcategory']);
  }

  cancel() {
    this.router.navigate(['/admin/mealcategory']);
  }
}
