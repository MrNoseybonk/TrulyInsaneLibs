import { TestBed } from '@angular/core/testing';

import { TypecreateService } from './typecreate.service';

describe('TypecreateService', () => {
  let service: TypecreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypecreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
