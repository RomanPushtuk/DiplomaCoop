import { TestBed } from '@angular/core/testing';

import { BackEndServiseService } from './back-end-servise.service';

describe('BackEndServiseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BackEndServiseService = TestBed.get(BackEndServiseService);
    expect(service).toBeTruthy();
  });
});
