import 'es6-shim';
import 'reflect-metadata';
import 'zone.js/dist/zone';
import './index.scss';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);