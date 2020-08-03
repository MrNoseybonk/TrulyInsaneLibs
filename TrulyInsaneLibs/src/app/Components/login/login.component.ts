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
  loginMessage: string;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.loginService.currentMessage.subscribe(message => this.loggedUser = message);

    if (this.loggedUser == null)
    {
      document.getElementById('prelog').style.display = 'block';
    }
    else
    {
      document.getElementById('prelog').style.display = 'none';
    }
  }

  login()
  {
    this.loginSub = this.loginService
    .login(this.username, this.password)
    .subscribe((resp) => {
      this.user = resp;
      this.loggedUser = this.user.username;
      this.loginService.changeMessage(this.loggedUser);
    });
    document.getElementById('navLogout').style.display = 'unset';
    document.getElementById('prelog').style.display = 'none';
    this.username = '';
    this.password = '';
  }

  ngOnDestroy()
  {
    if (this.loginSub)
    {
      this.loginSub.unsubscribe();
    }
  }

}
