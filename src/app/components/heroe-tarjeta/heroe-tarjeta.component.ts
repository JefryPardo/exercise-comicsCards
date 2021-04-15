import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: [
  ]
})


export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe:any = {};
  @Input() index: number = 0;

  @Output() heroeSele: EventEmitter<number>;


  constructor(private rutas:Router) {
    this.heroeSele = new EventEmitter();
   }

  ngOnInit(): void {
  }

  verHeroe(idx: number){
    console.log('hola',idx);
    this.rutas.navigate(['/heroe', idx]);
    //this.heroeSele.emit( this.index );
  }

}
