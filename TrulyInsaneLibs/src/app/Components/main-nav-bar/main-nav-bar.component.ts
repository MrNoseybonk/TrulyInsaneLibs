import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { Person } from 'src/app/Models/person';

@Component({
  selector: 'app-main-nav-bar',
  templateUrl: './main-nav-bar.component.html',
  styleUrls: ['./main-nav-bar.component.css']
})
export class MainNavBarComponent implements OnInit {
  loggedUser: Person;
  loginMessage: string;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.currentUser.subscribe(user => this.loggedUser = user);
    if (this.loggedUser != null)
    {
      this.loginMessage = this.loggedUser.username;
    }
  }

  logout()
  {
    this.loginService
    .logout();
    this.loginMessage = '';
  }
}
