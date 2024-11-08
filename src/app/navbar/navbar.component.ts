import { Component } from '@angular/core';
import { RestaurantsComponent } from '../restaurants/restaurants.component';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../cartservice.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RestaurantsComponent,RouterModule,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  foods = [
    { name: 'Biryani', image: "assets/Biryani.png" },
    { name: 'pizza', image: "assets/pizza.png" },
    { name: 'chinese', image: "assets/hakkanoodles.avif" },
    { name: 'burger', image: "assets/burger.png" },
    { name: 'shawarma', image: "assets/shawarma.png" },
    { name: 'northindian', image: "assets/north indian.png" },
    { name: 'dosa', image: "assets/Dosa.png" }
  ];

}
