import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../service/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filtro-heroes',
  templateUrl: './filtro-heroes.component.html'
})


export class FiltroHeroesComponent implements OnInit {

  heroes:any[] = [];
  termino:string = "";
  constructor(private activatedRoute:ActivatedRoute, private heroeSer:HeroesService, private rutas:Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.termino = params['termino'];
      this.heroes = this.heroeSer.buscarHeroes( this.termino );
      console.log( this.heroes );
    })
  }



}
