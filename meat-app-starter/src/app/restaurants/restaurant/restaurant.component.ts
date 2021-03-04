import { Component, OnInit, Input } from '@angular/core';
import { fromPromise } from 'rxjs/observable/fromPromise';

import {Restaurant} from './restaurant.model'

@Component({
  selector: 'mt-restaurant',
  templateUrl: './restaurant.component.html',
})
export class RestaurantComponent implements OnInit {

  @Input() restaurant: Restaurant

  constructor() { }

  ngOnInit() {
  }

}
