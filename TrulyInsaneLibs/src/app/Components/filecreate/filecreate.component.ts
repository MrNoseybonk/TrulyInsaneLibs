import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Person } from 'src/app/Models/person';


@Component({
  selector: 'app-filecreate',
  templateUrl: './filecreate.component.html',
  styleUrls: ['./filecreate.component.css']
})
export class FilecreateComponent implements OnInit {
  loggedUser: Person;

  public formGroup = this.fb.group({
    file: [null, Validators.required]
  });

  public fileName;

  constructor( private fb: FormBuilder) { }

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

  public onFileChange(event)
  {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      this.fileName = event.target.files[0].name;
      const [file] = event.target.files;
      reader.readAsBinaryString(file);

      reader.onload = () => {
        this.formGroup.patchValue({
          file: reader.result
      });
      };
    }
  }
}
