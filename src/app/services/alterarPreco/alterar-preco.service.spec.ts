import { TestBed } from '@angular/core/testing';

import { AlterarPrecoService } from './alterar-preco.service';

describe('AlterarPrecoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlterarPrecoService = TestBed.get(AlterarPrecoService);
    expect(service).toBeTruthy();
  });
});
