import {NgModule, enableProdMode} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

// import { routing, appRoutingProviders } from './app.routing';
import {RouterModule} from '@angular/router';

import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {Sidebar} from './app/sidebar';
// import {Footer} from './app/footer';

import {AUTH_PROVIDERS} from 'angular2-jwt';
// import {AuthGuard} from './auth/auth-guard.service';
// import {Auth} from './auth/auth.service';

import {FoldersComponent} from './folders/folders.component';
import {HomeComponent} from './app/home.component';

declare var process: any;
if (process.env.NODE_ENV === 'production') {
  enableProdMode();
}

@NgModule({
  declarations: [
    FoldersComponent, 
    HomeComponent, 
    // Footer,
    Sidebar,
    AppComponent
  ],
  providers: [
    // appRoutingProviders,
    // Auth, 
    // AuthGuard, 
    // AUTH_PROVIDERS
  ],
  imports: [
    BrowserModule,
    // routing,
    RouterModule.forRoot([
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'folders', component: FoldersComponent}
    ]),
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}