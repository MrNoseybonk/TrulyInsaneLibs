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
  nounsArr: any[];
  nouns: string[];
  pluralsArr: number[];
  plurals: string[];
  verbsArr: number[];
  verbs: string[];
  adjArr: number[];
  adjectives: string[];
  colorsArr: number[];
  colors: string[];
  ingsArr: number[];
  ings: string[];
  adverbsArr: number[];
  adverbs: string[];
  propArr: number[];
  propers: string[];
  numbArr: number[];
  numbers: string[];
  pastsArr: number[];
  pasts: string[];

  public formGroup = this.fb.group({
    file: [null, Validators.required]
  });

  public fileName;

  constructor(private fb: FormBuilder, private fileUploadService: FileuploadService) { }

  ngOnInit(): void {
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

      this.nounsArr = new Array(this.totals.nouns);
      this.pluralsArr = new Array(this.totals.plurals);
      this.verbsArr = new Array(this.totals.verbs);
      this.adjArr = new Array(this.totals.adjectives);
      this.colorsArr = new Array(this.totals.colors);
      this.ingsArr = new Array(this.totals.ings);
      this.adverbsArr = new Array(this.totals.adverbs);
      this.propArr = new Array(this.totals.propers);
      this.numbArr = new Array(this.totals.numbers);
      this.pastsArr = new Array(this.totals.pasts);
     } );
  }

  onCreate()
  {
    alert('Create pressed!');
    this.nouns = new Array(this.totals.nouns);
    this.plurals = new Array(this.totals.plurals);
    this.verbs = new Array(this.totals.verbs);
    this.adjectives = new Array(this.totals.adjectives);
    this.colors = new Array(this.totals.colors);
    this.ings = new Array(this.totals.ings);
    this.adverbs = new Array(this.totals.adverbs);
    this.propers = new Array(this.totals.propers);
    this.numbers = new Array(this.totals.numbers);
    this.pasts = new Array(this.totals.pasts);

    for (let i = 0; i < this.totals.nouns; i++)
    {
      const nounBox = document.getElementById('noun_' + i);
      this.nouns[i] = nounBox.value;
    }

    for (let i = 0; i < this.totals.plurals; i++)
    {
      const pluralBox = document.getElementById('plural_' + i);
      this.plurals[i] = pluralBox.value;
    }

    for (let i = 0; i < this.totals.verbs; i++)
    {
      const verbBox = document.getElementById('verb_' + i);
      this.verbs[i] = verbBox.value;
    }

    for (let i = 0; i < this.totals.adjectives; i++)
    {
      const adjectiveBox = document.getElementById('adj_' + i);
      this.adjectives[i] = adjectiveBox.value;
    }

    for (let i = 0; i < this.totals.colors; i++)
    {
      const colorBox = document.getElementById('color_' + i);
      this.colors[i] = colorBox.value;
    }

    for (let i = 0; i < this.totals.ings; i++)
    {
      const ingBox = document.getElementById('ing_' + i);
      this.ings[i] = ingBox.value;
    }

    for (let i = 0; i < this.totals.adverbs; i++)
    {
      const adverbBox = document.getElementById('adverb_' + i);
      this.adverbs[i] = adverbBox.value;
    }

    for (let i = 0; i < this.totals.propers; i++)
    {
      const properBox = document.getElementById('prop_' + i);
      this.propers[i] = properBox.value;
    }

    for (let i = 0; i < this.totals.numbers; i++)
    {
      const numberBox = document.getElementById('numb_' + i);
      this.numbers[i] = numberBox.value;
    }

    for (let i = 0; i < this.totals.pasts; i++)
    {
      const pastBox = document.getElementById('past_' + i);
      this.pasts[i] = pastBox.value;
    }

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
  }
}
