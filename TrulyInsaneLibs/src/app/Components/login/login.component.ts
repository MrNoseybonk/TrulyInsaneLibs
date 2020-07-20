import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/login.service';
import { User } from '../../Models/user';

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
  user: User;
  loggedUser: string;
  loginMessage = document.getElementById('login');

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.logMade = false;
  }

  login()
  {
    this.loginSub = this.loginService
    .login(this.username, this.password)
    .subscribe((resp) => {
      this.loginMessage = document.getElementById('login');
      this.user = resp;
      this.loggedUser = this.user.username;
      this.loginMessage.style.display = 'none';
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
