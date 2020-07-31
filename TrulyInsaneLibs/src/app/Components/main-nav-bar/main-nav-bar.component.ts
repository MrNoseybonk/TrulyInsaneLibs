import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { Person } from 'src/app/Models/person';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-nav-bar',
  templateUrl: './main-nav-bar.component.html',
  styleUrls: ['./main-nav-bar.component.css']
})
export class MainNavBarComponent implements OnInit {
  loggedUser: Person;
  loggedUsername: string;
  loginMessage: string;

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.currentMessage.subscribe(message => this.loggedUsername = message);
  }

  logout()
  {
    this.loginService
    .logout();
    this.loginMessage = '';

    this.loginService.changeMessage(null);
    document.getElementById('navLogout').style.display = 'none';

    sessionStorage.removeItem('currentUser');

    if (document.getElementById('prelog'))
    {
      document.getElementById('prelog').style.display = 'block';
    }
  }
}
