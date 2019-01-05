import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColecoesRegistoComponent } from './colecoes-registo.component';

describe('ColecoesRegistoComponent', () => {
  let component: ColecoesRegistoComponent;
  let fixture: ComponentFixture<ColecoesRegistoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColecoesRegistoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColecoesRegistoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
