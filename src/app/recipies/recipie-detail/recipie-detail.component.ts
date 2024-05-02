import { RecipieService } from './../recipie.service';
import { Component, Input, OnInit } from '@angular/core';
import { Recipie } from '../recipie.model';
import { RecipiesComponent } from '../recipies.component';

@Component({
  selector: 'app-recipie-detail',
  templateUrl: './recipie-detail.component.html',
  styleUrl: './recipie-detail.component.css'
})
export class RecipieDetailsComponent implements OnInit{

  @Input() recipie:Recipie;
  constructor(private recipieService: RecipieService){}

  ngOnInit(){

    console.log("checking",this.recipie)
  }

  onAddToShoppingList(){
    this.recipieService.addIntredientsToShoppingList(this.recipie.ingredients);
  }

}
