import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';
import { Person } from 'src/app/Models/person';
import { NewuserService } from 'src/app/newuser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit, OnDestroy {
  registerMessage: string;
  loggedUser: Person;
  newUser: Person;
  private registerSub: Subscription;
  private checkSub: Subscription;

  public registerForm = this.fb.group({
    username: [null, Validators.required],
    password: [null, Validators.required]
  });

  constructor(private fb: FormBuilder, private newUserService: NewuserService, private router: Router) { }

  ngOnInit(): void {
    this.loggedUser = JSON.parse(localStorage.getItem('currentUser'));
    if (this.loggedUser == null)
    {
      document.getElementById('loggedIn').style.display = 'none';
      document.getElementById('loggedOut').style.display = 'block';
    }
    else
    {
      document.getElementById('loggedIn').style.display = 'block';
      document.getElementById('loggedOut').style.display = 'none';
    }
  }

  onBlur(): void {
    // console.log(this.registerForm.get('username').value);
    this.checkSub = this.newUserService.checkUsername(this.registerForm.get('username').value)
    .subscribe((resp) => {
      if (resp === true)
      {
        this.registerMessage = 'That username has already been taken. Please choose another one.';
      }
      else
      {
        this.registerMessage = null;
      }
    });
  }

  onSubmit(): void {
    this.registerSub = this.newUserService.register(this.registerForm.get('username').value, this.registerForm.get('password').value)
    .subscribe((resp) => {
      this.newUser = resp;
      console.log(this.newUser);
      if (this.newUser.id !== -1)
      {
        alert('You have registered!');
        this.router.navigate(['']);
      }
      else
      {
        this.registerMessage = 'That username has already been taken. Please choose another one.';
      }
    });
  }

  ngOnDestroy(): void {
    if (this.registerSub)
    {
      this.registerSub.unsubscribe();
    }
    if (this.checkSub)
    {
      this.checkSub.unsubscribe();
    }
  }

}
