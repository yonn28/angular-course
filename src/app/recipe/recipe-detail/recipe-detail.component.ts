import { Component, Input, OnInit } from '@angular/core';
import { Recipie } from '../models/recipie.model';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe: Recipie = new Recipie('','','');
  constructor() { }

  ngOnInit(): void {
  }

}
