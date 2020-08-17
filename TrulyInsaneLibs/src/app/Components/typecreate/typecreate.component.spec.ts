import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypecreateComponent } from './typecreate.component';

describe('TypecreateComponent', () => {
  let component: TypecreateComponent;
  let fixture: ComponentFixture<TypecreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypecreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypecreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
