import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibuploadComponent } from './libupload.component';

describe('LibuploadComponent', () => {
  let component: LibuploadComponent;
  let fixture: ComponentFixture<LibuploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibuploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibuploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
