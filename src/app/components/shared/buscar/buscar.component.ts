import { Component, OnInit } from '@angular/core';
import { Heroe, HeroesService } from '../../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html'
})
export class BuscarComponent implements OnInit {

  heroesResults: Heroe[] = [];

  constructor( private heroesService: HeroesService, private router: Router, private activatedRoute: ActivatedRoute ) {
    this.activatedRoute.params.subscribe( params => {
      this.heroesResults = this.heroesService.buscarHeroes( params['termino'] );
    } );
   }

  ngOnInit() {
  }

  verHeroe( id: number ) {
    this.router.navigate(['/heroe', id]);
  }

}
