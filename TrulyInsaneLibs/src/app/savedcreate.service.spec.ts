import { TestBed } from '@angular/core/testing';

import { SavedcreateService } from './savedcreate.service';

describe('SavedcreateService', () => {
  let service: SavedcreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SavedcreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
