/// <reference path="../typings/index.d.ts"/>

import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, RouterConfig} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';

@Component({
  selector: 'root',
  templateUrl: './root.html',
  directives: [ROUTER_DIRECTIVES]
})
export class Root {
}

export const routes: RouterConfig = [
  {
    path: '',
    component: DashboardComponent
  }
];
