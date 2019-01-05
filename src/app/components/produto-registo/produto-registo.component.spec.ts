import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoRegistoComponent } from './produto-registo.component';

describe('ProdutoRegistoComponent', () => {
  let component: ProdutoRegistoComponent;
  let fixture: ComponentFixture<ProdutoRegistoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutoRegistoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoRegistoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
