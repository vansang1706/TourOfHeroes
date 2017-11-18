import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeroDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private locaion: Location
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

  goBack(): void{
    this.locaion.back();
  }

  @Input() hero: Hero;

}
