import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesaveComponent } from './typesave.component';

describe('TypesaveComponent', () => {
  let component: TypesaveComponent;
  let fixture: ComponentFixture<TypesaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypesaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypesaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
