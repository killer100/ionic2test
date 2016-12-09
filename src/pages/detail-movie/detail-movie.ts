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
  public default_image = 'assets/img/img-background.jpg';
  public backdrop;

  constructor(public navCtrl: NavController, private readonly _loadingCtrl: LoadingController, private _navParams: NavParams) {
    this.movie = _navParams.get('movie');
    this.backdrop = `https://image.tmdb.org/t/p/w500${this.movie.backdrop_path}`;
  }

  private CreateLoader(text: string) {
    return this._loadingCtrl.create({
      content: text
    });
  }

  ionViewDidLoad() {
    //console.log('Hello DetailMoviePage Page');
  }

}
