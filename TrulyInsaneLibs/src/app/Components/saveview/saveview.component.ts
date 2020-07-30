import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { SaveviewService } from '../../saveview.service';
import { Person } from 'src/app/Models/person';

@Component({
  selector: 'app-saveview',
  templateUrl: './saveview.component.html',
  styleUrls: ['./saveview.component.css']
})
export class SaveviewComponent implements OnInit {
  viewChoices: any[];
  finishedLib: string;
  viewSub: Subscription;

  loggedUser: Person;

  public formGroup = this.fb.group({
    selectedLib: [null, Validators.required]
  });

  constructor(private fb: FormBuilder, private saveViewService: SaveviewService) { }

  ngOnInit(): void {
    this.fillSelector();
  }

  public fillSelector()
  {
    this.loggedUser = JSON.parse(localStorage.getItem('currentUser'));
    this.viewSub = this.saveViewService.getViews(this.loggedUser.id).subscribe((resp) => {
      this.viewChoices = resp;
    });
  }

  onSubmit(): void
  {

  }

}
