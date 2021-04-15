import { Component } from '@angular/core';

//Para tomar id del enlace
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../service/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})


export class HeroeComponent{
  heroe:any = {};

  constructor( private activaedRoute: ActivatedRoute, private _heroesService: HeroesService ) {
    this.activaedRoute.params.subscribe( params => {
      console.log( params );
      console.log( params['id'] );

      this.heroe = this._heroesService.getHeroe( params['id'] );
    })
  }

}
