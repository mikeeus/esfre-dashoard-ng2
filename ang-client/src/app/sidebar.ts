import {Component} from '@angular/core';
import {Auth} from '../auth/auth.service';

@Component({
  selector: 'Sidebar',
  templateUrl: './app/sidebar.html'
})
export class Sidebar {
  // constructor(private auth: Auth) {}
  Authentication: boolean = false;
}
