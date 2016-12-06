import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { URLSearchParams } from '@angular/http';
import { SearchModel } from '../models/SearchModel'
/*
  Generated class for the MovieService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MovieService {
  //otra key 5fbddf6b517048e25bc3ac1bbeafb919
  private readonly API_KEY: string = '1c256e6b722d005e6ec151d5e1c4b3a5';
  private readonly API_URL: string = 'https://api.themoviedb.org/3';

  constructor(public http: Http) {
    //console.log('Hello MovieService Provider');
  }

  public BuscarMovie(Search, Page): Observable<SearchModel> {
    let params = new URLSearchParams();
    params.set('api_key', this.API_KEY);
    params.set('page', Page);
    params.set('query', Search);
    params.set('language', 'es-ES');
    return this.http.get(this.API_URL + '/search/movie', { search: params })
      .map(res => res.json());
  }

  public DetallePelicula(movie_id: number) {
    let params = new URLSearchParams();
    params.set('api_key', this.API_KEY);
    params.set('language', 'es-ES');
    return this.http.get(this.API_URL + `/movie/${movie_id}`, { search: params })
      .map(res => res.json());
  }



}
