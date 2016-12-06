import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { SearchMoviePage } from '../pages/search-movie/search-movie';
import { DetailMoviePage } from '../pages/detail-movie/detail-movie';
import { MovieService } from '../providers/movie-service'
import { TruncatePipe } from './pipes/TruncatePipe';
@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    SearchMoviePage,
    DetailMoviePage,
    TruncatePipe
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    SearchMoviePage,
    DetailMoviePage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }, MovieService]
})
export class AppModule { }
