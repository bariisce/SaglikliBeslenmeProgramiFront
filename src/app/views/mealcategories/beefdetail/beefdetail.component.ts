import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-beefdetail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './beefdetail.component.html',
  styleUrls: ['./beefdetail.component.scss']
})
export class BeefdetailComponent {
  meal: any = {}; // Default olarak boş bir obje olarak başlatılıyor

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state && navigation.extras.state['meal']) {
      this.meal = navigation.extras.state['meal'];
    }
  }
}
