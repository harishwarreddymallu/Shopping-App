import { Component,  Input, OnInit } from '@angular/core';
import { Recipie } from '../../recipie.model';
import { RecipieService } from '../../recipie.service';

@Component({
  selector: 'app-recipie-item',
  templateUrl: './recipie-item.component.html',
  styleUrl: './recipie-item.component.css'
})
export class RecipieItemComponent implements OnInit{

  @Input() recipie: Recipie;

  constructor(private recipieService: RecipieService){

  }
  ngOnInit(){


  }

  onSelected(){
    this.recipieService.recipieSelected.emit(this.recipie);
  }

}
