import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import Ingredient from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss']
})
export class ShoppingListEditComponent implements OnInit {

  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  @Output() newShoppingItem = new EventEmitter<Ingredient>();

  constructor() {
      this.amountInput = "" as unknown as ElementRef;
      this.nameInput = "" as unknown as ElementRef;
   }

  ngOnInit(): void {
  }

  getValues() {
    const name = this.nameInput.nativeElement.value;
    const amount = this.amountInput.nativeElement.value;
    this.newShoppingItem.emit(new Ingredient( name, amount));
  }
}
