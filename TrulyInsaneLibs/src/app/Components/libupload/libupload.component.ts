import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LibService } from 'src/app/lib.service';
import { Subscription } from 'rxjs';
import { Words } from 'src/app/Models/words';

@Component({
  selector: 'app-libupload',
  templateUrl: './libupload.component.html',
  styleUrls: ['./libupload.component.css']
})
export class LibuploadComponent implements OnInit {
  private libSub: Subscription;
  private createSub: Subscription;

  totals: any;

  nounsArr: any[] = [{
    noun: ''
  }];
  nouns: string[];

  pluralsArr: any[] = [{
    plural: ''
  }];
  plurals: string[];

  verbsArr: any[] = [{
    verb: ''
  }];
  verbs: string[];

  adjArr: any[] = [{
    adjective: ''
  }];
  adjectives: string[];

  colorsArr: any[] = [{
    color: ''
  }];
  colors: string[];

  ingsArr: any[] = [{
    ing: ''
  }];
  ings: string[];

  adverbsArr: any[] = [{
    adverb: ''
  }];
  adverbs: string[];

  propArr: any[] = [{
    proper: ''
  }];
  propers: string[];

  numbArr: any[] = [{
    number: ''
  }];
  numbers: string[];

  pastsArr: any[] = [{
    past: ''
  }];
  pasts: string[];

  words: Words;
  finishedLib: any;

  public formGroup = this.fb.group({
    file: [null, Validators.required]
  });

  public fileName;

  constructor(private fb: FormBuilder, private libService: LibService) { }

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
    this.libSub = this.libService.upload(this.fileName, this.formGroup.get('file').value).subscribe((resp) => {
      this.totals = resp;

      for (let i = 0; i < (this.totals.nouns - 1); i++)
      {
        this.nounsArr.push({
          noun: ''
        });
      }

      for (let i = 0; i < (this.totals.plurals - 1); i++)
      {
        this.pluralsArr.push({
          plural: ''
        });
      }

      for (let i = 0; i < (this.totals.verbs - 1); i++)
      {
        this.verbsArr.push({
          verb: ''
        });
      }

      for (let i = 0; i < (this.totals.adjectives - 1); i++)
      {
        this.adjArr.push({
          adjective: ''
        });
      }

      for (let i = 0; i < (this.totals.colors - 1); i++)
      {
        this.colorsArr.push({
          color: ''
        });
      }

      for (let i = 0; i < (this.totals.ings - 1); i++)
      {
        this.ingsArr.push({
          ing: ''
        });
      }

      for (let i = 0; i < (this.totals.adverbs - 1); i++)
      {
        this.adverbsArr.push({
          adverb: ''
        });
      }

      for (let i = 0; i < (this.totals.propers - 1); i++)
      {
        this.propArr.push({
          proper: ''
        });
      }

      for (let i = 0; i < (this.totals.numbers - 1); i++)
      {
        this.numbArr.push({
          number: ''
        });
      }

      for (let i = 0; i < (this.totals.pasts - 1); i++)
      {
        this.pastsArr.push({
          past: ''
        });
      }
     } );
  }

  onCreate()
  {
    // alert('Create pressed!');
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

    this.words = new Words();

    for (let i = 0; i < this.totals.nouns; i++)
    {
      this.nouns[i] = this.nounsArr[i].noun;
    }

    for (let i = 0; i < this.totals.plurals; i++)
    {
      this.plurals[i] = this.pluralsArr[i].plural;
    }

    for (let i = 0; i < this.totals.verbs; i++)
    {
      this.verbs[i] = this.verbsArr[i].verb;
    }

    for (let i = 0; i < this.totals.adjectives; i++)
    {
      this.adjectives[i] = this.adjArr[i].adjective;
    }

    for (let i = 0; i < this.totals.colors; i++)
    {
      this.colors[i] = this.colorsArr[i].color;
    }

    for (let i = 0; i < this.totals.ings; i++)
    {
      this.ings[i] = this.ingsArr[i].ing;
    }

    for (let i = 0; i < this.totals.adverbs; i++)
    {
      this.adverbs[i] = this.adverbsArr[i].adverb;
    }

    for (let i = 0; i < this.totals.propers; i++)
    {
      this.propers[i] = this.propArr[i].proper;
    }

    for (let i = 0; i < this.totals.numbers; i++)
    {
      this.numbers[i] = this.numbArr[i].number;
    }

    for (let i = 0; i < this.totals.pasts; i++)
    {
      this.pasts[i] = this.pastsArr[i].past;
    }

    // console.log(this.nouns);
    // console.log(this.plurals);
    // console.log(this.verbs);
    // console.log(this.adjectives);
    // console.log(this.colors);
    // console.log(this.ings);
    // console.log(this.adverbs);
    // console.log(this.propers);
    // console.log(this.numbers);
    // console.log(this.pasts);

    this.words.nouns = this.nouns;
    this.words.plurals = this.plurals;
    this.words.verbs = this.verbs;
    this.words.adjectives = this.adjectives;
    this.words.colors = this.colors;
    this.words.ings = this.ings;
    this.words.adverbs = this.adverbs;
    this.words.propers = this.propers;
    this.words.numbers = this.numbers;
    this.words.pasts = this.pasts;

    // console.log(this.words);

    this.createSub = this.libService.createLib(this.formGroup.get('file').value, this.words).subscribe((resp) => {
      this.finishedLib = resp.lib;
    });
  }
}
