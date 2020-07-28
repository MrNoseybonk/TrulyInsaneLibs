import { Component, OnInit } from '@angular/core';
import { SavedcreateService } from 'src/app/savedcreate.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-savedcreate',
  templateUrl: './savedcreate.component.html',
  styleUrls: ['./savedcreate.component.css']
})
export class SavedcreateComponent implements OnInit {
  libChoices: any[];
  selectedLib: string;
  private libSub: Subscription;

  constructor(private savedCreateService: SavedcreateService) { }

  ngOnInit(): void {
    this.fillSelector();
  }

  public fillSelector()
  {
    this.libSub = this.savedCreateService.getLibs().subscribe((resp) => {
      this.libChoices = resp;
    });
  }
}
