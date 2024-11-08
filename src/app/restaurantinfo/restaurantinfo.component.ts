import { CommonModule } from '@angular/common';
import { Component,OnInit} from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CartService } from '../cartservice.service';
import { FavoriteService } from '../favorite.service';


@Component({
  selector: 'app-restaurantinfo',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './restaurantinfo.component.html',
  styleUrl: './restaurantinfo.component.scss'
})
export class RestaurantinfoComponent implements OnInit {
  restaurant: any;
  menuItems: any[] = [];
  messages: { [key: number]: string } = {};
  favoriteItems: any[] = [];
  restaurants = [
    { id: 1, name: 'Pizza Hut', rating: '4.5 (45+ ratings)', cost: '₹350 for two', cuisine: 'Pizzas', location: 'Himayat nagar', deliveryTime: '15-20 mins' },
    { id: 2, name: 'Domino Pizza', rating: '4.4 (200+ ratings)', cost: '₹500 for two', cuisine: 'pizzas,pastas', location: 'Himayat nagar', deliveryTime: '25-30 mins' },
    { id: 3, name: 'Burger King', rating: '4.3 (150+ ratings)', cost: '₹450 for two', cuisine: 'Burger,American', location: 'Himayat nagar', deliveryTime: '10-15 mins' },
    { id: 4, name: 'McDonalds', rating: '4.5 (45+ ratings)', cost: '₹400 for two', cuisine: 'Burger,Fastfood,Rolls', location: 'Himayat nagar', deliveryTime: '25-30 mins' },
    { id: 5, name: 'Cafe Niloufer classic', rating: '4.5 (45+ ratings)', cost: '₹450 for two', cuisine: 'beverages', location: 'Red hills', deliveryTime: '15-20 mins' },
    { id: 6, name: 'Drunken Monkey', rating: '4.4 (200+ ratings)', cost: '₹300 for two', cuisine: 'Healthy food', location: 'Banjara Hills',deliveryTime: '25-30 mins' },
    { id: 7, name: 'Fruitfull', rating: '4.3 (150+ ratings)', cost: '₹350 for two', cuisine: 'salads', location: 'kachiguda', deliveryTime: '10-15 mins' },
    { id: 8, name: 'Starbucks', rating: '4.5 (45+ ratings)', cost: '₹700 for two', cuisine: 'Beverages', location: 'Banjara Hills', deliveryTime: '20-30 mins' }
  ];

  menus: { [key: number]: { name: string; cost: number; description: string; image: string }[] } = {
    1: [
      { name: 'Garden Delight Pizza', cost: 380, description: 'A classic veg pizza that combines the zing and freshness of onions, tomatoes and capsicum. [Fat-7.2 per 100 g, Protein-9.8 per 100 g, Carbohydrate-31.4 per 100 g, Sugar-0 per 100 g, Calories-230 k.cal]Nutritional information per 100g', image: 'assets/p1.avif' },
      { name: 'Burn To Hell Pizza', cost: 286, description: 'A fiery and lethal combination of hot & garlic dip, jalapenos, mushrooms, olives and capsicum. [Fat-8.4 per 100 g, Protein-13.1 per 100 g, Carbohydrate-43.1 per 100 g, Sugar-2.6 per 100 g, Calories-300.5 k. cal]Nutritional information per 100g', image: 'assets/p2.avif' },
      
    ],
    2: [
      { name: 'Spiced Double Chicken Pizza', cost: 678, description: 'Molten Cheese Indulgence with combination of Pepper Barbecue Chicken & Peri Peri Chicken for Chicken lovers', image: 'assets/d1.avif' },
      { name: 'Indi Tandoori Paneer Cheese Burst', cost: 640, description: 'Now in 3 New Flavours - Molten Cheese Indulgence with spicy tandoori paneer, capsicum, red paprika & mint mayo.', image: 'assets/d2.avif' }
    ],
    3: [
      { name: 'Classic Family Feast for 4 - Veg', cost: 730, description: 'Save Rs. 200 | 2 Crispy Veg + BK Veggie + Veg Crunchy Taco + 2 Med Fries + 2 Dips + Coca Cola Medium + Chocolate Thick Shake. Kcal: 2926.9', image: 'assets/king1.avif' },
      { name: 'Premium Family Feast for 4 - Chicken', cost: 982, description: 'Kcal: 3321.6 | Carbs 1228.2 Gms| Sugar: 147.2 Gms| Fat: 141.8 Gms| Saturated fat: 49.1 Gms| Protein: 89.2 Gms| Sodium: 5008.5 Mg Contains: Gluten', image: 'assets/king2.avif' }
    ],
    4: [
      { name: 'Chicken Surprise Burger Combo', cost: 238, description: 'Chicken Surprise Burger Combo + Fries (M) + Drink of your choice.', image: 'assets/m1.avif' },
      { name: 'Cappuccino Small with Hazelnut', cost: 185, description: 'A delightful and aromatic coffee beverage that combines the robust flavor of espresso with the rich, nutty essence of hazelnut.', image: 'assets/m2.avif' }
    ],
    5: [
      { name: 'Niloufer Tea Kettle', cost: 330, description: 'The Perfect Proportion Of Tea, Milk And Sugar. Small Kettle -4 Cups And Big Kettle - 7 Cups', image: 'assets/c1.avif' },
      { name: 'Platinum Tea Powder 250grm', cost: 166, description: 'Unique In Taste, Brimming With Refreshing Aromatics Our Platinum Ctc Leaf Tea Is The Perfect Mood Uplifter To Help You Refresh', image: 'assets/c2.avif' }
    ],
    6: [
      { name: 'Dry Fruit Smoothie Bowl', cost: 219, description: 'A wholesome bowl from the deserts of sahara packed with dates, figs, granola, caramel, cashews, almonds blended with apple, chikoo, coconut', image: 'assets/d11.avif' },
      { name: 'Avocado Bites The Dragon', cost: 319, description: 'Super avacado belended with amazing dragon fruit & coconut. No added sugar. (approx. ) serving count - 350ml calories - 177, proteins - 3', image: 'assets/d22.avif' }
    ],
    7: [
      { name: 'Custard Fruitfull Bowl', cost: 199, description: 'Serves 1 | | A lip-smacking recipe from moms kitchen, made of love, loads of fresh fruits(royalgala apples, banana, grannysmith greenapple', image: 'assets/f1.avif' },
      { name: 'Watermelon - Mint Muddle Bowl', cost: 109, description: 'Sweet & Juicy Watermelon Freshly Cut Into Cubes And Chilled. Packed With Vitamins And Amino Acids, This Bowl Gives Instant Hydration', image: 'assets/f2.avif' }
    ],
    8: [
      { name: 'Classic Iced Coffee', cost: 255, description: 'Savour our premium coffee made with top 3% Arabica beans in an all new iced avatar. Frothy iced shaken espresso flavoured with brown sugar ', image: 'assets/s1.avif' },
      { name: 'Short Classic Iced Coffee with Paneer Tikka Sandwich', cost: 299, description: 'Savour our premium coffee made with top 3% Arabica beans in an all new iced avatar', image: 'assets/s2.avif' }
    ]
  };

  constructor(private route: ActivatedRoute, private cartService: CartService,private favoriteService: FavoriteService) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.restaurant = this.restaurants.find(rest => rest.id === id);
    this.menuItems = this.menus[id as keyof typeof this.menus] || [];

  }

   
  addToCart(item: any, index: number) {
    this.cartService.addToCart(item);
    this.messages[index] = 'Added to cart';
    setTimeout(() => {
      this.messages[index] = '';
    }, 3000);
  }
  addToFavorites(item: any) {
    this.favoriteService.addToFavorites(item);
  }
  
}
 

