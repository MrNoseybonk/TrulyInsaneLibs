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
    this.loginMessage = this.loggedUser;
    this.loginService.changeMessage(this.loginMessage);
    document.getElementById('navLogout').style.display = 'block';
  }

  ngOnDestroy()
  {
    if (this.loginSub)
    {
      this.loginSub.unsubscribe();
    }
  }

}
