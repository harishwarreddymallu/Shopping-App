import { ShoppingListService } from './../shopping-list.sevice';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent implements OnInit{

 @ViewChild('nameInput') nameInputRef:ElementRef;
 @ViewChild('amountInput') amountInputRef:ElementRef;

constructor(private shoppingListService: ShoppingListService){}

 onAddItem(){
    const ingName=this.nameInputRef.nativeElement.value;
    const ingAmount=this.amountInputRef.nativeElement.value;
    const newIngredient=new Ingredient(ingName,ingAmount);
    this.shoppingListService.addIngredient(newIngredient);
  }

  ngOnInit(){

  }

}
