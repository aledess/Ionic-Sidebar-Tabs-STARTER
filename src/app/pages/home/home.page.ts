import { Component } from '@angular/core';
import {NavbarComponent} from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  title = 'Home';
  constructor() {}

}
