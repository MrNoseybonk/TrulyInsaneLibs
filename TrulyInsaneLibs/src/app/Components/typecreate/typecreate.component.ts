import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Person } from 'src/app/Models/person';

@Component({
  selector: 'app-typecreate',
  templateUrl: './typecreate.component.html',
  styleUrls: ['./typecreate.component.css']
})
export class TypecreateComponent implements OnInit {

  public formGroup = this.fb.group({
    typedlib: [null, Validators.required]
  });

  loggedUser: Person;

  constructor(private fb: FormBuilder) { }

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

}
