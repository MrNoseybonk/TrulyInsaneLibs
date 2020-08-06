import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/login.service';
import { ModalService } from '../../modal.service';
import { Person } from '../../Models/person';
import { NewuserComponent } from '../newuser/newuser.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  private loginSub: Subscription;
  user: Person;
  loggedUser: string;
  loginMessage: string;

  public loginForm = this.fb.group({
    username: [null, Validators.required],
    password: [null, Validators.required]
  });

  constructor(private loginService: LoginService, private modalService: ModalService, private fb: FormBuilder) { }

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

  register()
  {
    this.modalService.init(NewuserComponent, null, null);
  }

  login()
  {
    this.loginSub = this.loginService
    .login(this.loginForm.get('username').value, this.loginForm.get('password').value)
    .subscribe((resp) => {
      this.user = resp;
      this.loggedUser = this.user.username;
      this.loginService.changeMessage(this.loggedUser);

      document.getElementById('navLogout').style.display = 'unset';
      document.getElementById('prelog').style.display = 'none';
      this.loginForm.get('username').reset();
      this.loginForm.get('password').reset();
    }, err => {
      if (err.status === 404)
      {
        alert('Incorrect username and password. Please try again.');
      }
    });
  }

  ngOnDestroy()
  {
    if (this.loginSub)
    {
      this.loginSub.unsubscribe();
    }
  }

}
