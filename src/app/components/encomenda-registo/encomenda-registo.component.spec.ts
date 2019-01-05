import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncomendaRegistoComponent } from './encomenda-registo.component';

describe('EncomendaRegistoComponent', () => {
  let component: EncomendaRegistoComponent;
  let fixture: ComponentFixture<EncomendaRegistoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncomendaRegistoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncomendaRegistoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
