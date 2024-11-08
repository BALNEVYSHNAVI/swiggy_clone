import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantinfoComponent } from './restaurantinfo/restaurantinfo.component';
import { FooditemComponent } from './fooditem/fooditem.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PlacesComponent } from './places/places.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponenet } from './search/search.component';
import { FavComponent } from './fav/fav.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,RestaurantsComponent,RestaurantinfoComponent,FooditemComponent,PlacesComponent,SearchComponenet,FavComponent,FooterComponent,HttpClientModule,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'clone';
}
