import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantinfoComponent } from './restaurantinfo/restaurantinfo.component';
import { SearchComponenet } from './search/search.component';
import { FooditemComponent } from './fooditem/fooditem.component';
import { CartComponent } from './cart/cart.component';
import { SigninComponent } from './signin/signin.component';
import { FavComponent } from './fav/fav.component';

const routes: Routes = [
  { path: '', redirectTo: '/restaurants', pathMatch: 'full' },  
  { path: 'restaurants', component: RestaurantsComponent },     
  { path: 'search', component: SearchComponenet },                
  { path: 'restaurant/:id', component: RestaurantinfoComponent },
  { path: 'food/:name', component: FooditemComponent },
  { path: 'cart', component: CartComponent },
{ path: 'sign-in', component: SigninComponent },
{ path: 'fav', component: FavComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
