import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-saveview',
  templateUrl: './saveview.component.html',
  styleUrls: ['./saveview.component.css']
})
export class SaveviewComponent implements OnInit {
  viewChoices: any[];
  finishedLib: string;

  public formGroup = this.fb.group({
    selectedLib: [null, Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(): void
  {
    
  }

}
