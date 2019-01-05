import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginGestaoComponent } from './login-gestao.component';

describe('LoginGestaoComponent', () => {
  let component: LoginGestaoComponent;
  let fixture: ComponentFixture<LoginGestaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginGestaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginGestaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
