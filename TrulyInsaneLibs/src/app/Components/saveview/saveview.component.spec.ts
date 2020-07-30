import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveviewComponent } from './saveview.component';

describe('SaveviewComponent', () => {
  let component: SaveviewComponent;
  let fixture: ComponentFixture<SaveviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
