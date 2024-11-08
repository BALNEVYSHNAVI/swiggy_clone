import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../favorite.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favorite',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.scss']
})
export class FavComponent implements OnInit {
  favoriteItems: any[] = [];

  constructor(private favoriteService: FavoriteService) {}

  ngOnInit() {
    this.favoriteItems = this.favoriteService.getFavorites();
  }

  removeFromFavorites(item: any) {
    this.favoriteService.removeFromFavorites(item);
    this.favoriteItems = this.favoriteService.getFavorites(); // Refresh the list
  }
}
