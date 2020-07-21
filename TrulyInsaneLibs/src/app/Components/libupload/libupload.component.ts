import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FileuploadService } from 'src/app/fileupload.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-libupload',
  templateUrl: './libupload.component.html',
  styleUrls: ['./libupload.component.css']
})
export class LibuploadComponent implements OnInit {
  private libSub: Subscription;

  totals: any;
  nouns: number;
  plurals: number;
  verbs: number;
  adjectives: number;
  colors: number;
  ings: number;
  adverbs: number;
  propers: number;
  numbers: number;
  pasts: number;

  public formGroup = this.fb.group({
    file: [null, Validators.required]
  });

  public fileName;

  constructor(private fb: FormBuilder, private fileUploadService: FileuploadService) { }

  ngOnInit(): void {
    this.nouns = 0;
    this.plurals = 0;
    this.verbs = 0;
    this.adjectives = 0;
    this.colors = 0;
    this.ings = 0;
    this.adverbs = 0;
    this.propers = 0;
    this.numbers = 0;
    this.pasts = 0;
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

  public onSubmit(): void
  {
    this.libSub = this.fileUploadService.upload(this.fileName, this.formGroup.get('file').value).subscribe((resp) => {
      this.totals = resp;
      this.nouns = this.totals.nouns;
      this.plurals = this.totals.plurals;
      this.verbs = this.totals.verbs;
      this.adjectives = this.totals.adjectives;
      this.colors = this.totals.colors;
      this.ings = this.totals.ings;
      this.adverbs = this.totals.adverbs;
      this.propers = this.totals.propers;
      this.numbers = this.totals.numbers;
      this.pasts = this.totals.pasts;
      console.log(this.nouns);
      console.log(this.plurals);
      console.log(this.verbs);
      console.log(this.adjectives);
      console.log(this.colors);
      console.log(this.ings);
      console.log(this.adverbs);
      console.log(this.propers);
      console.log(this.numbers);
      console.log(this.pasts);
     } );
  }
}
