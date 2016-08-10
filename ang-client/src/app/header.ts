import {Component} from '@angular/core';
import {Auth} from '../auth/auth.service';

@Component({
  selector: 'Header',
  template: require('./header.html'),
  providers: [Auth]
})
export class Header {
  // constructor(private auth: Auth) {}
  // Authentication: boolean = false;
}
