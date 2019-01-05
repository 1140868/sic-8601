import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncomendaEstadoComponent } from './encomenda-estado.component';

describe('EncomendaEstadoComponent', () => {
  let component: EncomendaEstadoComponent;
  let fixture: ComponentFixture<EncomendaEstadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncomendaEstadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncomendaEstadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
