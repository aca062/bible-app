import { TestBed } from '@angular/core/testing';

import { VersesApiService } from './verses-api.service';

describe('VersesApiService', () => {
  let service: VersesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VersesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
