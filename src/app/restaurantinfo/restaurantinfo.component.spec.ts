import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantinfoComponent } from './restaurantinfo.component';

describe('RestaurantinfoComponent', () => {
  let component: RestaurantinfoComponent;
  let fixture: ComponentFixture<RestaurantinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurantinfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
