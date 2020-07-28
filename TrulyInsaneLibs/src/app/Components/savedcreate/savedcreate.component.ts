import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SavedcreateService } from 'src/app/savedcreate.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-savedcreate',
  templateUrl: './savedcreate.component.html',
  styleUrls: ['./savedcreate.component.css']
})
export class SavedcreateComponent implements OnInit {
  libChoices: any[];
  private libSub: Subscription;

  public formGroup = this.fb.group({
    selectedLib: [null, Validators.required]
  });

  constructor(private fb: FormBuilder, private savedCreateService: SavedcreateService) { }

  ngOnInit(): void {
    this.fillSelector();
  }

  public fillSelector()
  {
    this.libSub = this.savedCreateService.getLibs().subscribe((resp) => {
      this.libChoices = resp;
    });
  }

  public onSubmit()
  {
    console.log(this.formGroup.get('selectedLib').value);
  }
}
