import { Ingredient } from './../shared/ingredient.model';
import { EventEmitter } from "@angular/core";

export class ShoppingListService{
  ingredientsChanged=new EventEmitter<Ingredient[]>();

  private ingredients :Ingredient[] =[
    new Ingredient('Apples',50),
    new Ingredient('Oranges',35),
   ];

   getIngredients(){
    return this.ingredients.slice();
   }

   addIngredient(ingredient:Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
   }

   addIngredients(ingredients: Ingredient[]){
  //   for(let i of ingredients){
  //     this.addIngredient(i);
  //   }
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());

  }



}
