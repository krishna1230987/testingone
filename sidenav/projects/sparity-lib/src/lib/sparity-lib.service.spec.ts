import { TestBed } from '@angular/core/testing';

import { SparityLibService } from './sparity-lib.service';

describe('SparityLibService', () => {
  let service: SparityLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SparityLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
