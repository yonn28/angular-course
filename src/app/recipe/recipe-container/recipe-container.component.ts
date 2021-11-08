import { Component, OnInit } from '@angular/core';
import { Recipie } from '../models/recipie.model';

@Component({
  selector: 'app-recipe-container',
  templateUrl: './recipe-container.component.html',
  styleUrls: ['./recipe-container.component.scss']
})
export class RecipeContainerComponent implements OnInit {

  recipieSelected: Recipie = new Recipie('','','');
  constructor() { }

  ngOnInit(): void {
  }

  detailRecipie(recipe: Recipie): void {
    this.recipieSelected = recipe;
  }

}
