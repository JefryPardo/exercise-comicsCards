import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../service/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})




export class HeroesComponent implements OnInit {

  heroes:any = [];

  constructor( private _heroesService:HeroesService, private rutas:Router ) {}

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes(); 
    console.log( this.heroes );
  }
  
 

}
