import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RestaurantsService } from '../../restaurants/restaurants.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>

  constructor(private RestaurantsService: RestaurantsService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.reviews = this.RestaurantsService.reviewsOfRestaurant(this.route.parent.snapshot.params['id'])
  }

}
