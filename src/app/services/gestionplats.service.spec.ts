import { TestBed } from '@angular/core/testing';

import { GestionplatsService } from './gestionplats.service';

describe('GestionplatsService', () => {
  let service: GestionplatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionplatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
