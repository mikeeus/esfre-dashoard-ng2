/// <reference path="../typings/index.d.ts"/>

import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, RouterConfig} from '@angular/router';
import {FoldersComponent} from './folders/folders.component';
import {Header} from './app/header';
import {Footer} from './app/footer';

@Component({
  selector: 'root',
  templateUrl: './root.html',
  directives: [ROUTER_DIRECTIVES, Footer, Header]
})
export class Root {
}

export const routes: RouterConfig = [
  {
    path: '',
    component: FoldersComponent
  }
];
