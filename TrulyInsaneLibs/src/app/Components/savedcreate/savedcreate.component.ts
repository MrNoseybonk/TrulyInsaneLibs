import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-savedcreate',
  templateUrl: './savedcreate.component.html',
  styleUrls: ['./savedcreate.component.css']
})
export class SavedcreateComponent implements OnInit {
  libChoices: any[];
  selectedLib: string;

  constructor() { }

  ngOnInit(): void {
    this.libChoices = [
      {id: 1, libName: 'Test'},
      {id: 2, libName: 'Recipe'}
    ];
    console.log(this.libChoices);
  }

}
