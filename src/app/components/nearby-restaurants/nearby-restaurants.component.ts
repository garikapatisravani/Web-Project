import { GeneralService } from './../../general.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nearby-restaurants',
  templateUrl: './nearby-restaurants.component.html',
  styleUrls: ['./nearby-restaurants.component.css']
})
export class NearbyRestaurantsComponent implements OnInit {


  restaurants: any[] = [];

  constructor(private service: GeneralService) { }

  ngOnInit(): void {
   
  }

  getNearByRestaurents(event, place, recipeName){
    this.service.getRestaurants(place,recipeName).subscribe((res:any) => {
      this.restaurants = res.response.venues;
      console.log('restaurants ###########', this.restaurants);
    })
    event.preventDefault();
  }
}
