import { TestBed } from '@angular/core/testing';

import { SaveviewService } from './saveview.service';

describe('SaveviewService', () => {
  let service: SaveviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
