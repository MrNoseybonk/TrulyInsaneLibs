import { Component } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Truly Insane Libs';

  constructor(private modalService: ModalService) {}

  removeModal()
  {
    this.modalService.destroy();
  }
}
