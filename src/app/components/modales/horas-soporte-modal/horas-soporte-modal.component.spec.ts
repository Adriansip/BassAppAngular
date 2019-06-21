import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorasSoporteModalComponent } from './horas-soporte-modal.component';

describe('HorasSoporteModalComponent', () => {
  let component: HorasSoporteModalComponent;
  let fixture: ComponentFixture<HorasSoporteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorasSoporteModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorasSoporteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
