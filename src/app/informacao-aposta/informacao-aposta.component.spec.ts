import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacaoApostaComponent } from './informacao-aposta.component';

describe('InformacaoApostaComponent', () => {
  let component: InformacaoApostaComponent;
  let fixture: ComponentFixture<InformacaoApostaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacaoApostaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformacaoApostaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
