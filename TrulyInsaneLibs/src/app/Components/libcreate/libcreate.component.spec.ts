import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibcreateComponent } from './libcreate.component';

describe('LibcreateComponent', () => {
  let component: LibcreateComponent;
  let fixture: ComponentFixture<LibcreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibcreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
