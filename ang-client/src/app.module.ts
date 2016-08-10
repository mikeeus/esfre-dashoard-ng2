import {NgModule, enableProdMode} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {Root} from './routes';
import {AUTH_PROVIDERS} from 'angular2-jwt';

import {FoldersComponent} from './folders/folders.component';
import {HomeComponent} from './app/home.component';

declare var process: any;
if (process.env.NODE_ENV === 'production') {
  enableProdMode();
}

@NgModule({
  declarations: [FoldersComponent, HomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'folders', component: FoldersComponent},
      {path: 'home', component: HomeComponent},
      {path: '', redirectTo: 'folders', pathMatch: 'full'}
      // {path: '**', redirectTo: 'folders', pathMatch: 'full'}
    ]), 
    // Forms
    FormsModule, 
  ],
  bootstrap: [Root]
})
export class AppModule {}