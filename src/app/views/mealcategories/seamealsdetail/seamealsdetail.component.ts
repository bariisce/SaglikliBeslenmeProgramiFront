import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-seamealsdetail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './seamealsdetail.component.html',
  styleUrl: './seamealsdetail.component.scss'
})
export class SeaMealDetailComponent {
  meal: any = {}; // Default olarak boş obje

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state && navigation.extras.state['meal']) {
      this.meal = navigation.extras.state['meal'];
    }
  }
}
