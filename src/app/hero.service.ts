import { Injectable } from '@angular/core';
// import { Headers, Http } from '@angular/http';
// import 'rxjs/add/operator/toPromise';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

import { MessageService } from './message.service';

export interface Flyer {
  canFly: boolean;
}

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class HeroService {
  private heroesUrl = 'api/heroes'; // URL to web api
  // private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http
      .get<Hero>(url)
      .pipe(
        tap(_ => this.log(`fetched hero id=${id}`)),
        catchError(this.handleError<Hero>(`getHero id=${id}`))
      );
  }
  /*
  getHero(id: number): Promise<Hero> {
    // return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Hero)
      .catch(this.handleError);
  }*/

  getHeroes(): Observable<Hero[]> {
    return this.http
      .get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(heroes => this.log('fetched heroes')),
        catchError(this.handleError('getHeroes', []))
      );
  }

  /*
  getHeroes(): Promise<Hero[]> {
    // return Promise.resolve(HEROES);
    return this.http.get(this.heroesUrl)
      .toPromise()
      .then(response => response.json() as Hero[])
      .catch(this.handleError);
  }*/

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning empty result.
      return of(result as T);
    };
  }
  /*
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }*/

  getHeroesSlowly(): Observable<Hero[]> {
    return new Observable(_ => {
      // Simulate server latency with 2 second delay
      setTimeout(() => this.getHeroes(), 2000); // TODO: VERIFY THIS
    });
  }

  /*
  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }
*/

  updateHero(hero: Hero): Observable<any> {
    return this.http
      .put(this.heroesUrl, hero, httpOptions)
      .pipe(
        tap(_ => this.log(`updated hero id=${hero.id}`)),
        catchError(this.handleError<any>('updateHero'))
      );
  }
  /*
  update(hero: Hero): Promise<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), { headers: this.headers })
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }
*/

  addHero(hero: Hero): Observable<Hero> {
    return this.http
      .post<Hero>(this.heroesUrl, hero, httpOptions)
      .pipe(
        tap((newHero: Hero) => this.log(`added hero with id=${newHero.id}`)),
        catchError(this.handleError<Hero>('addHero'))
      );
  }

  /*
  create(name: string, canFly: boolean): Promise<Hero> {
    return this.http
      .post(this.heroesUrl, JSON.stringify({ name: name, canFly: canFly }), {
        headers: this.headers
      })
      .toPromise()
      .then(res => res.json() as Hero)
      .catch(this.handleError);
  }
  */
  deleteHero(hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;
    return this.http
      .delete<Hero>(url, httpOptions)
      .pipe(
        tap(_ => this.log(`deleted hero with id=${id} `)),
        catchError(this.handleError<Hero>('deleteHero'))
      );
  }
  /*
  delete(id: number): Promise<void> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http
      .delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
  */

  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      return of([]);
    }
    const url = this.heroesUrl + `?name=${term}`;
    return this.http
      .get<Hero[]>(url)
      .pipe(
        tap(_ => this.log(`found heroes matching ${term}`)),
        catchError(this.handleError<Hero[]>('searchHeroes', []))
      );
  }
}
