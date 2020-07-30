import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/login.service';
import { Person } from '../../Models/person';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  private loginSub: Subscription;
  username: string;
  password: string;
  user: Person;
  loggedUser: string;
  loginMessage = document.getElementById('login');

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('currentUser') != null)
    {
      this.user = JSON.parse(localStorage.getItem('currentUser'));
      this.loggedUser = this.user.username;
    }
    else
    {
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

    this.router.navigate(['']);
    location.reload();
  }

  ngOnDestroy()
  {
    if (this.loginSub)
    {
      this.loginSub.unsubscribe();
    }
  }

}
