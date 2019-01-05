import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncomendaListaComponent } from './encomenda-lista.component';

describe('EncomendaListaComponent', () => {
  let component: EncomendaListaComponent;
  let fixture: ComponentFixture<EncomendaListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncomendaListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncomendaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
