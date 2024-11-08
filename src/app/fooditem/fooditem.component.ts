import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { CartComponent } from '../cart/cart.component';
import { CartService } from '../cartservice.service';



@Component({
  selector: 'app-fooditem',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fooditem.component.html',
  styleUrl: './fooditem.component.css'
})
export class FooditemComponent implements OnInit {
  food: any; 
  message: string = '';
  foods = [
    { name: 'Biryani', image: "assets/Biryani.png", cost: 250, description: 'Taste these delectable classics, delectable biryanis to make your day.' },
    { name: 'pizza', image: "assets/pizza.png", cost: 450, description: 'Cheesilicious pizzas to make every day extraordinary' },
    { name: 'chinese', image: "assets/hakkanoodles.avif", cost: 70, description: 'Transport your taste buds to the heart of Chinese cuisine with these scrumptious dishes.' },
    { name: 'burger', image: "assets/burger.png", cost: 150, description: 'Satisfy your cravings with these fresh and flavoursome burgers.' },
    { name: 'shawarma', image: "assets/shawarma.png", cost: 200, description: 'Order in deliciously juicy and grilled Shawarmas to curb your cravings!' },
    { name: 'northindian', image: "assets/north indian.png", cost: 150, description: 'Indulge with the best of North Indian cuisines.' },
    { name: 'dosa', image: "assets/Dosa.png", cost: 45, description: 'Satisfy your cravings for South Indian breakfast with these crispy & buttery Dosas.' }
  ];

  constructor(private route: ActivatedRoute, private cartService: CartService) {}

  ngOnInit(): void {
    const foodName = this.route.snapshot.paramMap.get('name');
    if (foodName) {
      this.food = this.foods.find(item => item.name === foodName);
    }
  }

  addToCart(food: any) {
    this.cartService.addToCart(food);
    this.message = 'Added to cart';
    console.log('Added to cart:', food); 
  }
}
