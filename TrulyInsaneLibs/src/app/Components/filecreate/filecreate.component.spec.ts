import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilecreateComponent } from './filecreate.component';

describe('FilecreateComponent', () => {
  let component: FilecreateComponent;
  let fixture: ComponentFixture<FilecreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilecreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilecreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
