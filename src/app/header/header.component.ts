import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private _auth:AuthService
  ){

  }
  isMenuOpen: boolean = false;
  hoverClass: string = 'hover:text-blue-600';

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
  logOut2(){
    this._auth.logOut();

  }
}
