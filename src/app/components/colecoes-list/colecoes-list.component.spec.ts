import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColecoesListComponent } from './colecoes-list.component';

describe('ColecoesListComponent', () => {
  let component: ColecoesListComponent;
  let fixture: ComponentFixture<ColecoesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColecoesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColecoesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
