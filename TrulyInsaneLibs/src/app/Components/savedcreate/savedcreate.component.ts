import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SavedcreateService } from 'src/app/savedcreate.service';
import { FileuploadService } from 'src/app/fileupload.service';
import { LibService } from 'src/app/lib.service';
import { Subscription } from 'rxjs';
import { Words } from 'src/app/Models/words';
import { Person } from 'src/app/Models/person';
import { Lib } from 'src/app/Models/lib';
import { SaveRequest } from 'src/app/Models/save-request';
import { Router } from '@angular/router';

@Component({
  selector: 'app-savedcreate',
  templateUrl: './savedcreate.component.html',
  styleUrls: ['./savedcreate.component.css']
})
export class SavedcreateComponent implements OnInit, OnDestroy {
  libChoices: any[];
  private libSub: Subscription;
  private getSub: Subscription;
  private uploadSub: Subscription;
  private createSub: Subscription;
  private saveSub: Subscription;

  totals: any;

  nounsArr: any[];
  nouns: string[];

  pluralsArr: any[];
  plurals: string[];

  verbsArr: any[];
  verbs: string[];

  adjArr: any[];
  adjectives: string[];

  colorsArr: any[];
  colors: string[];

  ingsArr: any[];
  ings: string[];

  adverbsArr: any[];
  adverbs: string[];

  propArr: any[];
  propers: string[];

  numbArr: any[];
  numbers: string[];

  pastsArr: any[];
  pasts: string[];

  foodsArr: any[];
  foods: string[];

  liquidsArr: any[];
  liquids: string[];

  startingLib: any;
  finishedLib: any;
  words: Words;

  loggedUser: Person;
  savedLib: Lib;
  savedName: string;
  saveRequest: SaveRequest;

  public formGroup = this.fb.group({
    selectedLib: [null, Validators.required]
  });

  // tslint:disable-next-line: max-line-length
  constructor(private fb: FormBuilder, private savedCreateService: SavedcreateService, private uploadService: FileuploadService, private libService: LibService, private router: Router) { }

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
      this.fillSelector();
    }
  }

  public fillSelector()
  {
    this.libSub = this.savedCreateService.getLibs().subscribe((resp) => {
      this.libChoices = resp;
    });
  }

  public saveLib()
  {
    this.savedLib = new Lib();
    this.saveRequest = new SaveRequest();
    const finishedLib = document.getElementById('finished');
    this.loggedUser = JSON.parse(localStorage.getItem('currentUser'));
    this.savedLib.lib = finishedLib.innerText;

    this.saveRequest.savedName = this.savedName;
    this.saveRequest.received = this.savedLib;
    this.saveRequest.person = this.loggedUser;
    // console.log(this.saveRequest);
    this.saveSub = this.savedCreateService.saveLib(this.saveRequest).subscribe((resp) => {
      console.log(resp);
    });
  }

  public onSubmit()
  {
    // console.log(this.formGroup.get('selectedLib').value);
    this.getSub = this.savedCreateService.getLib(this.formGroup.get('selectedLib').value).subscribe((resp) => {
      this.startingLib = resp.lib;
      // console.log(this.startingLib);

      this.uploadSub = this.uploadService.upload(resp.libName, this.startingLib).subscribe((resp2) => {
        this.totals = resp2;

        this.nounsArr = new Array();
        this.pluralsArr = new Array();
        this.verbsArr = new Array();
        this.adjArr = new Array();
        this.colorsArr = new Array();
        this.ingsArr = new Array();
        this.adverbsArr = new Array();
        this.propArr = new Array();
        this.numbArr = new Array();
        this.pastsArr = new Array();
        this.foodsArr = new Array();
        this.liquidsArr = new Array();

        // console.log(this.totals);

        for (let i = 0; i < (this.totals.nouns); i++)
        {
          this.nounsArr.push({
            noun: ''
          });
        }

        for (let i = 0; i < (this.totals.plurals); i++)
        {
          this.pluralsArr.push({
            plural: ''
          });
        }

        for (let i = 0; i < (this.totals.verbs); i++)
        {
          this.verbsArr.push({
            verb: ''
          });
        }

        for (let i = 0; i < (this.totals.adjectives); i++)
        {
          this.adjArr.push({
            adjective: ''
          });
        }

        for (let i = 0; i < (this.totals.colors); i++)
        {
          this.colorsArr.push({
            color: ''
          });
        }

        for (let i = 0; i < (this.totals.ings); i++)
        {
          this.ingsArr.push({
            ing: ''
          });
        }

        for (let i = 0; i < (this.totals.adverbs); i++)
        {
          this.adverbsArr.push({
            adverb: ''
          });
        }

        for (let i = 0; i < (this.totals.propers); i++)
        {
          this.propArr.push({
            proper: ''
          });
        }

        for (let i = 0; i < (this.totals.numbers); i++)
        {
          this.numbArr.push({
            number: ''
          });
        }

        for (let i = 0; i < (this.totals.pasts); i++)
        {
          this.pastsArr.push({
            past: ''
          });
        }

        for (let i = 0; i < (this.totals.foods); i++)
        {
          this.foodsArr.push({
            food: ''
          });
        }

        for (let i = 0; i < (this.totals.liquids); i++)
        {
          this.liquidsArr.push({
            liquid: ''
          });
        }
       } );

      const inputs = document.getElementById('inputs');
      const finishedLib = document.getElementById('finishedLib');

      if (inputs != null)
      {
        inputs.style.display = 'block';
      }

      if (finishedLib != null)
      {
        finishedLib.style.display = 'none';
      }
    });
  }

  public onCreate()
  {
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
    this.foods = new Array(this.totals.foods);
    this.liquids = new Array(this.totals.liquids);

    const inputs = document.getElementById('inputs');
    const finishedLib = document.getElementById('finishedLib');

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
      if (this.numbArr[i].number > 1000000000000)
      {
        this.numbers[i] = '1000000000000';
      }
      else if (this.numbArr[i].number < -1000000000000)
      {
        this.numbers[i] = '-1000000000000';
      }
      else
      {
        this.numbers[i] = this.numbArr[i].number;
      }
    }

    for (let i = 0; i < this.totals.pasts; i++)
    {
      this.pasts[i] = this.pastsArr[i].past;
    }

    for (let i = 0; i < this.totals.foods; i++)
    {
      this.foods[i] = this.foodsArr[i].food;
    }

    for (let i = 0; i < this.totals.liquids; i++)
    {
      this.liquids[i] = this.liquidsArr[i].liquid;
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
    // console.log(this.foods);
    // console.log(this.liquids);

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
    this.words.foods = this.foods;
    this.words.liquids = this.liquids;

    // console.log(this.words);

    inputs.style.display = 'none';

    this.createSub = this.libService.createLib(this.startingLib, this.words).subscribe((resp) => {
      this.finishedLib = resp.lib;
    });

    if (finishedLib != null)
    {
      finishedLib.style.display = 'block';
    }
  }

  ngOnDestroy()
  {
    if (this.libSub)
    {
      this.libSub.unsubscribe();
    }

    if (this.getSub)
    {
      this.getSub.unsubscribe();
    }

    if (this.uploadSub)
    {
      this.uploadSub.unsubscribe();
    }

    if (this.createSub)
    {
      this.createSub.unsubscribe();
    }

    if (this.saveSub)
    {
      this.saveSub.unsubscribe();
    }
  }
}
