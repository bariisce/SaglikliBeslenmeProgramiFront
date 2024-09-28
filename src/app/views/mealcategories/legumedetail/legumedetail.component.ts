import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-legumedetail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './legumedetail.component.html',
  styleUrl: './legumedetail.component.scss'
})
export class LegumeDetailComponent {
  meal: any = {};

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state && navigation.extras.state['meal']) {
      this.meal = navigation.extras.state['meal'];
    }
  }
}
