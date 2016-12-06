import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { MovieService } from '../../providers/movie-service';
import { DetailMoviePage } from '../detail-movie/detail-movie';
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

    constructor(public navCtrl: NavController, private readonly _movieService: MovieService, public loadingCtrl: LoadingController) {
        this.titulo = "";
    }

    private CreateLoader(text: string) {
        return this.loadingCtrl.create({
            content: text
        });
    }

    public SearchMovie() {
        if (this.titulo.length < 1) {
            return false;
        }
        let loader = this.CreateLoader('Buscando...');
        loader.present();
        this._movieService.BuscarMovie(this.titulo, 1).subscribe(
            Response => {
                this.pagination.results = Response.results;
                this.pagination.total = Response.total_results;
                this.pagination.total_pages = Response.total_pages;
                loader.dismiss();
            },
            error => { this.errorMessage = <any>error });
    }

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

    public SelectMovie(movie_id) {
        this.navCtrl.push(DetailMoviePage, {
            movie_id: movie_id,
        });
    }

}
