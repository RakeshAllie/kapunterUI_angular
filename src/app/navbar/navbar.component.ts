import { Component } from '@angular/core';
import { AccountsService } from '../Accounts/accounts.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private accountService: AccountsService, public authservice: AuthService, private router: Router) {}

  loginPopup() {
      this.accountService.OpenLoginPopup(true, 'Login');
  }

  goToMyAccount() {
    this.router.navigate(['/account/profile-details']);
  }

  logout(): void {
    this.authservice.logout();
  }
}
