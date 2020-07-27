import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FileuploadService } from 'src/app/fileupload.service';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {
  private uploadSub: Subscription;

  public formGroup = this.fb.group({
    file: [null, Validators.required],
    libName: ['LibName']
  });

  public fileName;
  public libName;

  constructor(private fb: FormBuilder, private uploadService: FileuploadService) { }

  ngOnInit(): void {
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
    // tslint:disable-next-line: max-line-length
    // this.uploadSub = this.uploadService.upload(this.fileName, this.formGroup.get('file').value).subscribe((resp) => { console.log (resp); });
    this.uploadSub = this.uploadService.uploadTemplate(this.fileName, this.libName, this.formGroup.get('file').value).subscribe((resp) => {
      console.log(resp);
    });
  }

}
