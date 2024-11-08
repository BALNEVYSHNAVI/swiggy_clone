import { Routes } from '@angular/router';
import { RestaurantinfoComponent } from './restaurantinfo/restaurantinfo.component';
import { HomeComponent } from './home/home.component';
import { FooditemComponent } from './fooditem/fooditem.component';
import { CartComponent } from './cart/cart.component';
import { SigninComponent } from './signin/signin.component';
import { SearchComponenet } from './search/search.component';
import { FavComponent } from './fav/fav.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }, 
    { path: 'home', component: HomeComponent }, 
    { path: 'restaurant/:id', component: RestaurantinfoComponent} ,
    { path: 'food/:name', component: FooditemComponent },
    { path: 'search', component: SearchComponenet },
    { path: 'cart', component: CartComponent },
    { path: 'fav', component: FavComponent },
    { path: 'sign-in', component: SigninComponent },
];

