import { TestBed } from '@angular/core/testing';

import { TravelsService } from './travels.service';

describe('TravelsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TravelsService = TestBed.get(TravelsService);
    expect(service).toBeTruthy();
  });
});
