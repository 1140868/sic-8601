import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FabricaRotaComponent } from './fabrica-rota.component';

describe('FabricaRotaComponent', () => {
  let component: FabricaRotaComponent;
  let fixture: ComponentFixture<FabricaRotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabricaRotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabricaRotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
