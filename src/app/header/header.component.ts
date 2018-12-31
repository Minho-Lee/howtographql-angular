import { Component, OnInit } from '@angular/core';
import { distinctUntilChanged } from 'rxjs/operators';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  logged: boolean;

  constructor(
    private _authService: AuthService
  ) { }

  ngOnInit() {
    this._authService.isAuthenticated
      .pipe(distinctUntilChanged())
      .subscribe((isAuthenticated) => {
        this.logged = isAuthenticated;
      });
  }

  logout(): void {
    this._authService.logout();
  }
}
