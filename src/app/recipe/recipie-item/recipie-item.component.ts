import { Component, OnInit, Input, Output ,EventEmitter } from '@angular/core';
import { Recipie } from '../models/recipie.model';

@Component({
  selector: 'app-recipie-item',
  templateUrl: './recipie-item.component.html',
  styleUrls: ['./recipie-item.component.scss']
})
export class RecipieItemComponent implements OnInit {

  @Input() recipie:Recipie = new Recipie('A basic recipie', 'the best recipie', 'good recipie');
  @Output() nameSelected = new EventEmitter<String>();
  constructor() { }

  ngOnInit(): void {
  }

  selectedItem(event:String){
    this.nameSelected.emit(event);
  }

}
