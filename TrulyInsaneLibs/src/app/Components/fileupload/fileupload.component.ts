import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FileuploadService } from 'src/app/fileupload.service';
import { Person } from 'src/app/Models/person';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {
  private uploadSub: Subscription;
  loggedUser: Person;

  public formGroup = this.fb.group({
    file: [null, Validators.required],
    libName: ['']
  });

  public fileName;

  constructor(private fb: FormBuilder, private uploadService: FileuploadService, private router: Router) { }

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
      // reader.readAsArrayBuffer(file);

      reader.onload = () => {
        this.formGroup.patchValue({
          file: reader.result
      });
      };
    }
  }

  public onSubmit(): void
  {
    this.uploadSub = this.uploadService.uploadTemplate(this.fileName, this.formGroup.get('libName').value, this.formGroup.get('file').value)
    .subscribe((resp) => {
      console.log(resp);
    });
  }

}
