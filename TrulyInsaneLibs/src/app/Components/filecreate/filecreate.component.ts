import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FileuploadService } from 'src/app/fileupload.service';
import { LibService } from 'src/app/lib.service';
import { Subscription } from 'rxjs';
import { Words } from 'src/app/Models/words';
import { Person } from 'src/app/Models/person';
import { Lib } from 'src/app/Models/lib';
import { SaveRequest } from 'src/app/Models/save-request';
import { SavedcreateService } from 'src/app/savedcreate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filecreate',
  templateUrl: './filecreate.component.html',
  styleUrls: ['./filecreate.component.css']
})
export class FilecreateComponent implements OnInit, OnDestroy {
  private libSub: Subscription;
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

  words: Words;
  finishedLib: any;

  loggedUser: Person;
  savedLib: Lib;
  saveRequest: SaveRequest;
  savedName: string;

  public formGroup = this.fb.group({
    file: [null, Validators.required]
  });

  public fileName;

  // tslint:disable-next-line: max-line-length
  constructor(private router: Router, private fb: FormBuilder, private uploadService: FileuploadService, private libService: LibService, private savedCreateService: SavedcreateService) { }

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

    sessionStorage.removeItem('selection');
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

      sessionStorage.setItem('fileName', this.fileName);
      // sessionStorage.setItem('file', JSON.stringify(file));
    }
  }

  public prepareFile(): void
  {
    sessionStorage.setItem('file', this.formGroup.get('file').value);
    console.log(sessionStorage.getItem('file'));
  }

  // public saveLib(): void
  // {
  //   if (this.savedName)
  //   {
  //     this.savedLib = new Lib();
  //     this.saveRequest = new SaveRequest();
  //     const finishedLib = document.getElementById('finished');
  //     this.loggedUser = JSON.parse(localStorage.getItem('currentUser'));
  //     this.savedLib.lib = finishedLib.innerText;

  //     this.saveRequest.savedName = this.savedName;
  //     this.saveRequest.received = this.savedLib;
  //     this.saveRequest.person = this.loggedUser;
  //     // console.log(this.saveRequest);
  //     this.saveSub = this.savedCreateService.saveLib(this.saveRequest).subscribe((resp) => {
  //       // console.log(resp);
  //       alert('Lib saved!');
  //     },
  //     message => {
  //       alert('The Lib wasn\'t saved correctly. Please try again.');
  //     });
  //   }
  //   else
  //   {
  //     alert('Please enter a name for your finished lib.');
  //   }
  // }

  // public onSubmit(): void
  // {
  //   this.uploadSub = this.uploadService.upload(this.fileName, this.formGroup.get('file').value).subscribe((resp) => {
  //     this.totals = resp;

  //     this.nounsArr = new Array();
  //     this.pluralsArr = new Array();
  //     this.verbsArr = new Array();
  //     this.adjArr = new Array();
  //     this.colorsArr = new Array();
  //     this.ingsArr = new Array();
  //     this.adverbsArr = new Array();
  //     this.propArr = new Array();
  //     this.numbArr = new Array();
  //     this.pastsArr = new Array();
  //     this.foodsArr = new Array();
  //     this.liquidsArr = new Array();

  //     // console.log(this.totals);

  //     for (let i = 0; i < (this.totals.nouns); i++)
  //     {
  //       this.nounsArr.push({
  //         noun: ''
  //       });
  //     }

  //     for (let i = 0; i < (this.totals.plurals); i++)
  //     {
  //       this.pluralsArr.push({
  //         plural: ''
  //       });
  //     }

  //     for (let i = 0; i < (this.totals.verbs); i++)
  //     {
  //       this.verbsArr.push({
  //         verb: ''
  //       });
  //     }

  //     for (let i = 0; i < (this.totals.adjectives); i++)
  //     {
  //       this.adjArr.push({
  //         adjective: ''
  //       });
  //     }

  //     for (let i = 0; i < (this.totals.colors); i++)
  //     {
  //       this.colorsArr.push({
  //         color: ''
  //       });
  //     }

  //     for (let i = 0; i < (this.totals.ings); i++)
  //     {
  //       this.ingsArr.push({
  //         ing: ''
  //       });
  //     }

  //     for (let i = 0; i < (this.totals.adverbs); i++)
  //     {
  //       this.adverbsArr.push({
  //         adverb: ''
  //       });
  //     }

  //     for (let i = 0; i < (this.totals.propers); i++)
  //     {
  //       this.propArr.push({
  //         proper: ''
  //       });
  //     }

  //     for (let i = 0; i < (this.totals.numbers); i++)
  //     {
  //       this.numbArr.push({
  //         number: ''
  //       });
  //     }

  //     for (let i = 0; i < (this.totals.pasts); i++)
  //     {
  //       this.pastsArr.push({
  //         past: ''
  //       });
  //     }

  //     for (let i = 0; i < (this.totals.foods); i++)
  //     {
  //       this.foodsArr.push({
  //         food: ''
  //       });
  //     }

  //     for (let i = 0; i < (this.totals.liquids); i++)
  //     {
  //       this.liquidsArr.push({
  //         liquid: ''
  //       });
  //     }
  //    } );

  //   const inputs = document.getElementById('inputs');
  //   const finishedLib = document.getElementById('finishedLib');

  //   if (inputs != null)
  //   {
  //     inputs.style.display = 'block';
  //   }

  //   if (finishedLib != null)
  //   {
  //     finishedLib.style.display = 'none';
  //   }
  // }

  // onCreate()
  // {
  //   // alert('Create pressed!');
  //   this.nouns = new Array(this.totals.nouns);
  //   this.plurals = new Array(this.totals.plurals);
  //   this.verbs = new Array(this.totals.verbs);
  //   this.adjectives = new Array(this.totals.adjectives);
  //   this.colors = new Array(this.totals.colors);
  //   this.ings = new Array(this.totals.ings);
  //   this.adverbs = new Array(this.totals.adverbs);
  //   this.propers = new Array(this.totals.propers);
  //   this.numbers = new Array(this.totals.numbers);
  //   this.pasts = new Array(this.totals.pasts);
  //   this.foods = new Array(this.totals.foods);
  //   this.liquids = new Array(this.totals.liquids);

  //   const inputs = document.getElementById('inputs');
  //   const finishedLib = document.getElementById('finishedLib');

  //   this.words = new Words();

  //   for (let i = 0; i < this.totals.nouns; i++)
  //   {
  //     this.nouns[i] = this.nounsArr[i].noun;
  //   }

  //   for (let i = 0; i < this.totals.plurals; i++)
  //   {
  //     this.plurals[i] = this.pluralsArr[i].plural;
  //   }

  //   for (let i = 0; i < this.totals.verbs; i++)
  //   {
  //     this.verbs[i] = this.verbsArr[i].verb;
  //   }

  //   for (let i = 0; i < this.totals.adjectives; i++)
  //   {
  //     this.adjectives[i] = this.adjArr[i].adjective;
  //   }

  //   for (let i = 0; i < this.totals.colors; i++)
  //   {
  //     this.colors[i] = this.colorsArr[i].color;
  //   }

  //   for (let i = 0; i < this.totals.ings; i++)
  //   {
  //     this.ings[i] = this.ingsArr[i].ing;
  //   }

  //   for (let i = 0; i < this.totals.adverbs; i++)
  //   {
  //     this.adverbs[i] = this.adverbsArr[i].adverb;
  //   }

  //   for (let i = 0; i < this.totals.propers; i++)
  //   {
  //     this.propers[i] = this.propArr[i].proper;
  //   }

  //   for (let i = 0; i < this.totals.numbers; i++)
  //   {
  //     if (this.numbArr[i].number > 1000000000000)
  //     {
  //       this.numbers[i] = '1000000000000';
  //     }
  //     else if (this.numbArr[i].number < -1000000000000)
  //     {
  //       this.numbers[i] = '-1000000000000';
  //     }
  //     else
  //     {
  //       this.numbers[i] = this.numbArr[i].number;
  //     }
  //   }

  //   for (let i = 0; i < this.totals.pasts; i++)
  //   {
  //     this.pasts[i] = this.pastsArr[i].past;
  //   }

  //   for (let i = 0; i < this.totals.foods; i++)
  //   {
  //     this.foods[i] = this.foodsArr[i].food;
  //   }

  //   for (let i = 0; i < this.totals.liquids; i++)
  //   {
  //     this.liquids[i] = this.liquidsArr[i].liquid;
  //   }

  //   // console.log(this.nouns);
  //   // console.log(this.plurals);
  //   // console.log(this.verbs);
  //   // console.log(this.adjectives);
  //   // console.log(this.colors);
  //   // console.log(this.ings);
  //   // console.log(this.adverbs);
  //   // console.log(this.propers);
  //   // console.log(this.numbers);
  //   // console.log(this.pasts);
  //   // console.log(this.foods);
  //   // console.log(this.liquids);

  //   this.words.nouns = this.nouns;
  //   this.words.plurals = this.plurals;
  //   this.words.verbs = this.verbs;
  //   this.words.adjectives = this.adjectives;
  //   this.words.colors = this.colors;
  //   this.words.ings = this.ings;
  //   this.words.adverbs = this.adverbs;
  //   this.words.propers = this.propers;
  //   this.words.numbers = this.numbers;
  //   this.words.pasts = this.pasts;
  //   this.words.foods = this.foods;
  //   this.words.liquids = this.liquids;

  //   // console.log(this.words);

  //   inputs.style.display = 'none';

  //   this.createSub = this.libService.createLib(this.formGroup.get('file').value, this.words).subscribe((resp) => {
  //     this.finishedLib = resp.lib;
  //   });

  //   if (finishedLib != null)
  //   {
  //     finishedLib.style.display = 'block';
  //   }
  // }

  ngOnDestroy()
  {
    if (this.libSub)
    {
      this.libSub.unsubscribe();
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
