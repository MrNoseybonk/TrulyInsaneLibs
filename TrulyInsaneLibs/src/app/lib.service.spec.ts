import { TestBed } from '@angular/core/testing';

import { LibService } from './lib.service';

describe('FileuploadService', () => {
  let service: LibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
