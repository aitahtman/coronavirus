import { TestBed } from '@angular/core/testing';

import { CartoService } from './carto.service';

describe('CartoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CartoService = TestBed.get(CartoService);
    expect(service).toBeTruthy();
  });
});
