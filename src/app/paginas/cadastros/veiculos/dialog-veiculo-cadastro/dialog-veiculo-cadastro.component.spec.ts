import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogVeiculoCadastroComponent } from './dialog-veiculo-cadastro.component';

describe('DialogVeiculoCadastroComponent', () => {
  let component: DialogVeiculoCadastroComponent;
  let fixture: ComponentFixture<DialogVeiculoCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogVeiculoCadastroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogVeiculoCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
