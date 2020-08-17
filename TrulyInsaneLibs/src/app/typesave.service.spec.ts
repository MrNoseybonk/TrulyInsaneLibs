import { TestBed } from '@angular/core/testing';

import { TypesaveService } from './typesave.service';

describe('TypesaveService', () => {
  let service: TypesaveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypesaveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
