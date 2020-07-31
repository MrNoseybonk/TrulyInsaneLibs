import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { SaveviewService } from '../../saveview.service';
import { Person } from 'src/app/Models/person';
import { Router } from '@angular/router';

@Component({
  selector: 'app-saveview',
  templateUrl: './saveview.component.html',
  styleUrls: ['./saveview.component.css']
})
export class SaveviewComponent implements OnInit, OnDestroy {
  viewChoices: any[];
  finishedLib: string;
  viewsSub: Subscription;
  viewSub: Subscription;
  deleteSub: Subscription;

  loggedUser: Person;

  public formGroup = this.fb.group({
    selectedLib: [null, Validators.required]
  });

  constructor(private fb: FormBuilder, private saveViewService: SaveviewService, private router: Router) { }

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
    this.loggedUser = JSON.parse(localStorage.getItem('currentUser'));
    this.viewsSub = this.saveViewService.getViews(this.loggedUser.id).subscribe((resp) => {
      this.viewChoices = resp;
    });
  }

  onSubmit(): void
  {
    this.viewSub = this.saveViewService.getView(this.formGroup.get('selectedLib').value).subscribe((resp) => {
      this.finishedLib = resp.lib;
    });
  }

  onDelete(): void
  {
    this.deleteSub = this.saveViewService.deleteView(this.formGroup.get('selectedLib').value).subscribe(() => {
      alert('Lib deleted.');
    },
    message => {
      alert('The Lib wasn\'t deleted correctly. Please try again.');
    });
    window.location.reload();
  }

  ngOnDestroy()
  {
    if (this.viewsSub)
    {
      this.viewsSub.unsubscribe();
    }

    if (this.viewSub)
    {
      this.viewSub.unsubscribe();
    }

    if (this.deleteSub)
    {
      this.deleteSub.unsubscribe();
    }
  }
}
