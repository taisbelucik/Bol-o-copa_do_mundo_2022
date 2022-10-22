import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaConfrontoComponent } from './tabela-confronto.component';

describe('TabelaConfrontoComponent', () => {
  let component: TabelaConfrontoComponent;
  let fixture: ComponentFixture<TabelaConfrontoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaConfrontoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaConfrontoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
