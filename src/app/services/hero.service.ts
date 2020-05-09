import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../mockData/hero';
import { HEROES } from './../mockData/mock-heros';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private messageService: MessageService
  ) { }

  getHeros(): Observable<Hero[]> {
    // send the message _after_ fetching the heros
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    // send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
