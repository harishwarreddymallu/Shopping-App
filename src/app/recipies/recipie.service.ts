import { EventEmitter, Injectable } from "@angular/core";
import { Recipie } from "./recipie.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.sevice";

@Injectable()
export class RecipieService{

recipieSelected= new EventEmitter<Recipie>();

 private  recipies: Recipie[] =[
    new Recipie('Sheer-ki-kurbani',
    'This simply good Dessert',
    'https://live.staticflickr.com/8719/28332021793_883a1c6c0a_b.jpg',
    [
      new Ingredient('Shemya',1),
      new Ingredient('DryFruits',2),

    ]),
    new Recipie('GulabJamun',
    'This super tasty-Just awesome',
    'https://surojitpalmal.com/wp-content/uploads/2023/07/Famous-Sweet-Shops-in-Kolkata.jpeg',
    [
      new Ingredient('Gulabjam-Flour',1),
      new Ingredient('DryFruits',2),
      new Ingredient('SugarSyrup',1),
    ]),
    new Recipie('Bandaru-Ladoo',
    'This is Amazing Sweet from Andhra',
    'https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvZnJzd2VldHNfcm91bmRfcGF0aWFsYV9wdW5qYWItaW1hZ2Uta3ljZjh5MmMuanBn.jpg',
    [
      new Ingredient('BengalGram-flour',1),
      new Ingredient('DryFruits',2),
    ]),

  ];

  constructor(private shoppingListService: ShoppingListService){}

  getRecipies(){
    return this.recipies.slice();
  }

  addIntredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
  }
}
