import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FileuploadService } from 'src/app/fileupload.service';
import { Person } from 'src/app/Models/person';

@Component({
  selector: 'app-typesave',
  templateUrl: './typesave.component.html',
  styleUrls: ['./typesave.component.css']
})
export class TypesaveComponent implements OnInit, OnDestroy {

  private uploadSub: Subscription;
  loggedUser: Person;

  public formGroup = this.fb.group({
    typedtemplate: [null, Validators.required],
    libName: [null, Validators.required]
  });

  constructor(private fb: FormBuilder, private uploadService: FileuploadService) { }

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

  public onSubmit(): void
  {
    this.uploadSub = this.uploadService.uploadTemplate('Typed In Template', this.formGroup.get('libName').value, this.formGroup.get('typedtemplate').value)
    .subscribe((resp) => {
      // console.log(resp);
      alert('Template saved!');
    },
    message => {
      alert('The template wasn\'t saved correctly. Please try again.');
    });
  }

  ngOnDestroy()
  {
    if (this.uploadSub)
    {
      this.uploadSub.unsubscribe();
    }
  }
}
