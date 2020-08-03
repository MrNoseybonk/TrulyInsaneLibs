import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';
import { Person } from 'src/app/Models/person';
import { NewuserService } from 'src/app/newuser.service';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit, OnDestroy {
  registerMessage: string;
  loggedUser: Person;
  private registerSub: Subscription;

  public registerForm = this.fb.group({
    username: [null, Validators.required],
    password: [null, Validators.required]
  });

  constructor(private fb: FormBuilder, private newUserService: NewuserService) { }

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

  onSubmit(): void {
    this.registerSub = this.newUserService.register(this.registerForm.get('username').value, this.registerForm.get('password').value)
    .subscribe((resp) => {
      alert('You have registered!');
    });
  }

  ngOnDestroy(): void {

  }

}
