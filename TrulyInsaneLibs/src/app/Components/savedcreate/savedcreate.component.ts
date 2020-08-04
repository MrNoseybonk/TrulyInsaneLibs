import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SavedcreateService } from 'src/app/savedcreate.service';
import { Subscription } from 'rxjs';
import { Person } from 'src/app/Models/person';

@Component({
  selector: 'app-savedcreate',
  templateUrl: './savedcreate.component.html',
  styleUrls: ['./savedcreate.component.css']
})
export class SavedcreateComponent implements OnInit, OnDestroy {
  libChoices: any[];
  private libSub: Subscription;

  loggedUser: Person;

  selection: string;

  public formGroup = this.fb.group({
    selectedLib: [null, Validators.required]
  });

  constructor(private fb: FormBuilder, private savedCreateService: SavedcreateService) { }

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

  public onChange(selection)
  {
    // alert(selection);
    this.selection = selection;
  }

  ngOnDestroy()
  {
    if (this.libSub)
    {
      this.libSub.unsubscribe();
    }
  }
}
