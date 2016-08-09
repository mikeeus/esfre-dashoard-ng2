/// <reference path="../../typings/index.d.ts"/>

import 'zone.js/dist/zone';
import 'zone.js/dist/async-test';
import {Component} from '@angular/core';
import {inject, async, setBaseTestProviders, TestComponentBuilder, ComponentFixture} from '@angular/core/testing';
import {TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS, TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS} from '@angular/platform-browser-dynamic/testing';

import {DashboardComponent} from './dashboard.component';

// @Component({
//   selector: 'Footer',
//   template: ''
// })
// class MockFooterComponent {}


setBaseTestProviders(TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS, TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS);

describe('dashboard component', () => {

  // it()
});