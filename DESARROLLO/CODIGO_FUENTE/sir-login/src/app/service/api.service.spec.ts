import { TestBed } from '@angular/core/testing';

import { AutenticacionService } from './autenticacion.service';

describe('ApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutenticacionService = TestBed.get(AutenticacionService);
    expect(service).toBeTruthy();
  });
});
