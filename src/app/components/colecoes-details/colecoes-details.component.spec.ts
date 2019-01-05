import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColecoesDetailsComponent } from './colecoes-details.component';

describe('ColecoesDetailsComponent', () => {
  let component: ColecoesDetailsComponent;
  let fixture: ComponentFixture<ColecoesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColecoesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColecoesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
