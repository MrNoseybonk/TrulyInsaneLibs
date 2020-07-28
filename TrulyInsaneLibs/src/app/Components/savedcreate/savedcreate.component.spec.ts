import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedcreateComponent } from './savedcreate.component';

describe('SavedcreateComponent', () => {
  let component: SavedcreateComponent;
  let fixture: ComponentFixture<SavedcreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedcreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
