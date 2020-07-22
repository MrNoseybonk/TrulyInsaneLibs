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
  nounsTotal: number;
  nounsArr: any[];
  nouns: string[];
  pluralsTotal: number;
  pluralsArr: number[];
  plurals: string[];
  verbsTotal: number;
  verbsArr: number[];
  verbs: string[];
  adjectivesTotal: number;
  adjArr: number[];
  adjectives: string[];
  colorsTotal: number;
  colorsArr: number[];
  colors: string[];
  ingsTotal: number;
  ingsArr: number[];
  ings: string[];
  adverbsTotal: number;
  adverbsArr: number[];
  adverbs: string[];
  propersTotal: number;
  propArr: number[];
  propers: string[];
  numbersTotal: number;
  numbArr: number[];
  numbers: string[];
  pastsTotal: number;
  pastsArr: number[];
  pasts: string[];

  public formGroup = this.fb.group({
    file: [null, Validators.required]
  });

  public fileName;

  constructor(private fb: FormBuilder, private fileUploadService: FileuploadService) { }

  ngOnInit(): void {
    this.nounsTotal = 0;
    this.pluralsTotal = 0;
    this.verbsTotal = 0;
    this.adjectivesTotal = 0;
    this.colorsTotal = 0;
    this.ingsTotal = 0;
    this.adverbsTotal = 0;
    this.propersTotal = 0;
    this.numbersTotal = 0;
    this.pastsTotal = 0;
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
      this.nounsTotal = this.totals.nouns;
      this.pluralsTotal = this.totals.plurals;
      this.verbsTotal = this.totals.verbs;
      this.adjectivesTotal = this.totals.adjectives;
      this.colorsTotal = this.totals.colors;
      this.ingsTotal = this.totals.ings;
      this.adverbsTotal = this.totals.adverbs;
      this.propersTotal = this.totals.propers;
      this.numbersTotal = this.totals.numbers;
      this.pastsTotal = this.totals.pasts;

      console.log('onSubmit nounsTotal: ' + this.nounsTotal);
      this.nounsArr = new Array(this.nounsTotal);
      this.pluralsArr = [];
      this.verbsArr = [];
      this.adjArr = [];
      this.colorsArr = [];
      this.ingsArr = [];
      this.adverbsArr = [];
      this.propArr = [];
      this.numbArr = [];
      this.pastsArr = [];

      for (let i = 0; i < this.pluralsTotal; i++)
      {
        this.pluralsArr.push(i);
      }

      for (let i = 0; i < this.verbsTotal; i++)
      {
        this.verbsArr.push(i);
      }

      for (let i = 0; i < this.adjectivesTotal; i++)
      {
        this.adjArr.push(i);
      }

      for (let i = 0; i < this.colorsTotal; i++)
      {
        this.colorsArr.push(i);
      }

      for (let i = 0; i < this.ingsTotal; i++)
      {
        this.ingsArr.push(i);
      }

      for (let i = 0; i < this.adverbsTotal; i++)
      {
        this.adverbsArr.push(i);
      }

      for (let i = 0; i < this.propersTotal; i++)
      {
        this.propArr.push(i);
      }

      for (let i = 0; i < this.numbersTotal; i++)
      {
        this.numbArr.push(i);
      }

      for (let i = 0; i < this.pastsTotal; i++)
      {
        this.pastsArr.push(i);
      }
     } );
  }

  onCreate()
  {
    alert('Create pressed!');
    this.nouns = new Array(this.nounsTotal);
    this.plurals = [];
    this.verbs = [];
    this.adjectives = [];
    this.colors = [];
    this.ings = [];
    this.adverbs = [];
    this.propers = [];
    this.numbers = [];
    this.pasts = [];

    for (let i = 0; i < this.nounsTotal; i++)
    {
      const nounBox = document.getElementById('noun_' + i);
      this.nouns[i] = nounBox.value;
    }

    console.log(this.nouns);
  }
}
