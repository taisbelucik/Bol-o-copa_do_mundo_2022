import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApostaInicialComponent } from './aposta-inicial.component';

describe('ApostaInicialComponent', () => {
  let component: ApostaInicialComponent;
  let fixture: ComponentFixture<ApostaInicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApostaInicialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApostaInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
