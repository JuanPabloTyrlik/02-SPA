import { Component, OnInit } from '@angular/core';
import { Heroe, HeroesService } from '../../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html'
})
export class BuscarComponent implements OnInit {

  heroesResults: Heroe[] = [];

  constructor( private heroesService: HeroesService, private activatedRoute: ActivatedRoute ) {
    this.activatedRoute.params.subscribe( params => {
      this.heroesResults = this.heroesService.buscarHeroes( params['termino'] );
    } );
   }

  ngOnInit() {
  }

}
