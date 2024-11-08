import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [NgFor,FormsModule,RouterLink],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponenet{
  searchQuery: string = '';
  items = [
    { img: 'assets/biryani2.avif' ,name: 'biryani',},
    { img: 'assets/pizza.png' ,name:'pizza'},
    { img: 'assets/shawarma.png' ,name:'Shawarma'},
    { img: 'assets/c1.avif',name:'coffee' },
    { img: 'assets/pastry.png' ,name:'Cakes'},
    { img: 'assets/burger.png',name:'burger' },
    { img: 'assets/pasta.png',name:'pasta'},
    { img: 'assets/hakkanoodles.avif' ,name:'Noodles'},
    { img: 'assets/chicken.avif',name:'chicken' },
  ];

  get filteredItems() {
    return this.items.filter(item =>
      item.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
  
}
