import { Component, OnInit } from '@angular/core';
import Ingredient from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-container',
  templateUrl: './shopping-container.component.html',
  styleUrls: ['./shopping-container.component.scss']
})
export class ShoppingContainerComponent implements OnInit {

  newingredient: Ingredient = new Ingredient('', 0);
  constructor() { }

  ngOnInit(): void {
  }

  newShopping(event: Ingredient) {
    this.newingredient = event;
  }
}
