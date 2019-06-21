import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionModalComponent } from './funcion-modal.component';

describe('FuncionModalComponent', () => {
  let component: FuncionModalComponent;
  let fixture: ComponentFixture<FuncionModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncionModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
