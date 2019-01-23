import { TestBed } from '@angular/core/testing';

import { NomServiceService } from './nom-service.service';

describe('NomServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NomServiceService = TestBed.get(NomServiceService);
    expect(service).toBeTruthy();
  });
});
