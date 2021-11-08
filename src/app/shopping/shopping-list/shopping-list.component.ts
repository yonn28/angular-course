import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import Ingredient from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [new Ingredient('Apples', 10),new Ingredient('oranges', 10)];
  @Input() newIngredient: Ingredient = {name: 'Apples', amount: 0}
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges){
    const ingredient = changes.newIngredient.currentValue;
    if(ingredient.name !== ''){
      this.ingredients.push(new Ingredient(ingredient.name, ingredient.amount));
    }
  }


}
