import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MovieService } from '../../providers/movie-service'
/*
  Generated class for the SearchMovie page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-search-movie',
  templateUrl: 'search-movie.html'
})
export class SearchMoviePage {

  public titulo: string;
  public pagination = {
    results: [],
    total: 0,
    total_pages: 0
  };
  public errorMessage;

  constructor(public navCtrl: NavController, private readonly _movieService: MovieService) {
    this.titulo = "";
  }

  public SearchMovie() {
    this._movieService.BuscarMovie(this.titulo, 1).subscribe(
      Response => {
        this.pagination.results = Response.results;
        this.pagination.total = Response.total_results;
        this.pagination.total_pages = Response.total_pages;
        console.log(this.pagination);
      },
      error => this.errorMessage = <any>error);
  };

  public onCancel($event) {
    this.titulo = "";
  }

  public onInput($event) {
    console.log("buscar")
    this.SearchMovie();
  }

  ionViewDidLoad() {
    console.log('Hello SearchMoviePage Page');
  }

}
