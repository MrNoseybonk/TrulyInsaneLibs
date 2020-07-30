import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/login.service';
import { Person } from '../../Models/person';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  private loginSub: Subscription;
  username: string;
  password: string;
  logMade: boolean;
  user: Person;
  loggedUser: string;
  loginMessage = document.getElementById('login');

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.logMade = false;
    if (localStorage.getItem('currentUser') != null)
    {
      console.log('Logged in.');
      this.user = JSON.parse(localStorage.getItem('currentUser'));
      this.loggedUser = this.user.username;
    }
    else
    {
      console.log('Logged out.');
      this.loggedUser = null;
    }
  }

  login()
  {
    this.loginSub = this.loginService
    .login(this.username, this.password)
    .subscribe((resp) => {
      this.loginMessage = document.getElementById('login');
      this.user = resp;
      this.loggedUser = this.user.username;
    });
  }

  ngOnDestroy()
  {
    if (this.logMade === true)
    {
      this.loginSub.unsubscribe();
    }
  }

}
