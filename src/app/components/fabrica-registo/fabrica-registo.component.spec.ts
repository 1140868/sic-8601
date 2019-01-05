import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FabricaRegistoComponent } from './fabrica-registo.component';

describe('FabricaRegistoComponent', () => {
  let component: FabricaRegistoComponent;
  let fixture: ComponentFixture<FabricaRegistoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabricaRegistoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabricaRegistoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
