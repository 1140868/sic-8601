import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarPrecoComponent } from './alterar-preco.component';

describe('AlterarPrecoComponent', () => {
  let component: AlterarPrecoComponent;
  let fixture: ComponentFixture<AlterarPrecoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlterarPrecoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarPrecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
