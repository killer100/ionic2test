import { Component } from '@angular/core';
import { NavController, LoadingController, NavParams } from 'ionic-angular';
import { MovieService } from '../../providers/movie-service';

/*
  Generated class for the DetailMovie page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-detail-movie',
  templateUrl: 'detail-movie.html'
})
export class DetailMoviePage {

  private errorMessage;
  public movie;

  constructor(public navCtrl: NavController, private readonly _movieService: MovieService, private readonly _loadingCtrl: LoadingController, private _navParams: NavParams) {
    this.movie = {};
  }

  public GetMovieDetail() {
    var loader = this.CreateLoader('Cargando Información');
    loader.present();
    this._movieService.DetallePelicula(this._navParams.get("movie_id")).
      subscribe(
      Response => { this.movie = Response; loader.dismiss(); console.log(this.movie) },
      error => { this.errorMessage = <any>error }
      );
  }

  private CreateLoader(text: string) {
    return this._loadingCtrl.create({
      content: text
    });
  }

  ionViewDidLoad() {
    //console.log('Hello DetailMoviePage Page');
    this.GetMovieDetail();
  }

}
