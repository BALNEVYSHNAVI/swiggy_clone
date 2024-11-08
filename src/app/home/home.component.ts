import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { SearchComponenet } from '../search/search.component';
import { RestaurantsComponent } from '../restaurants/restaurants.component';
import { PlacesComponent } from '../places/places.component';
import { FooterComponent } from '../footer/footer.component';
import { QrComponent } from '../qr/qr.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,SearchComponenet,RestaurantsComponent,PlacesComponent,FooterComponent,QrComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
