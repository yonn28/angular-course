import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipie } from '../models/recipie.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipies: Recipie[] = [
    new Recipie('Apple pie', 'Apple pie in furn', 'https://i.ytimg.com/vi/RoHWiA6pogg/maxresdefault.jpg'), 
    new Recipie('lasagna', 'full of meat lasagna', 'https://www.nuggetmarket.com/media/images/10/03/beef-lasagna-square.jpg')
  ]
  @Output() detailRecipie = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  recipieSelected(name: String): void {
    const recipieSelected =this.recipies.find((item) => item.name == name);
    this.detailRecipie.emit(recipieSelected);
  }

}
