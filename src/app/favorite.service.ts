import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private favoriteItems: any[] = [];

  addToFavorites(item: any) {
    this.favoriteItems.push(item);
  }

  getFavorites() {
    return this.favoriteItems;
  }

  removeFromFavorites(item: any) {
    this.favoriteItems = this.favoriteItems.filter(fav => fav !== item);
  }
}
