import { TestBed } from '@angular/core/testing';

import { ColecoesService } from './colecoes.service';

describe('ColecoesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ColecoesService = TestBed.get(ColecoesService);
    expect(service).toBeTruthy();
  });
});
