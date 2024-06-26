import { RecipieService } from './../recipie.service';
import { Component , OnInit } from '@angular/core';
import { Recipie } from '../recipie.model';


@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.css']
})
export class RecipieListComponent implements OnInit {


  recipies: Recipie[];

  constructor(private recipieService:RecipieService){

  }


  ngOnInit(){
    this.recipies=this.recipieService.getRecipies();
  }

}
