import { CommonModule,NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurants',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './restaurants.component.html',
  styleUrl: './restaurants.component.scss'
})
export class RestaurantsComponent {
  constructor(private router: Router) {}

  restaurants = [
    { id: 1, name: 'Pizza Hut', image: '/assets/pizzahut.jpg',rate:'4.5' ,description: 'Pizzas', location: 'Himayat nagarr' },
    { id: 2, name: 'Domino Pizza', image: 'assets/dominos.JPG',rate:'4.8', description: 'pizzas,pastas', location: 'Himayat nagar' },
    { id: 3, name: 'Burger King', image: 'assets/burgerking.JPG',rate:'4.6',description: 'Burger,American', location: 'Himayat nagar' },
    { id:4,name:'McDonalds',image:'assets/mcdon.jpg',rate:'4.8',description: 'Burger,Fastfood,Rolls',location: 'Himayat nagar'},
    { id: 5, name: 'Cafe Niloufer classic', image: 'assets/cafe.avif',rate:'4.4' ,description: 'beverages', location: 'Red hill' },
    { id: 6, name: 'Drunken Monkey', image: 'assets/druken.avif',rate:'4.6', description: 'Healthy food', location: 'Banjara Hills' },
    { id: 7, name: 'Fruitfull', image: 'assets/fruit.avif',rate:'4.8',description: 'salads', location: 'kachiguda' },
    { id:8,name:'Starbucks',image:'assets/star.avif',rate:'4.7',description: 'Beverages',location: 'Banjara Hills'}
  ];

  goToRestaurantDetail(id: number) {
    this.router.navigate(['/restaurant', id]);
  }
}
