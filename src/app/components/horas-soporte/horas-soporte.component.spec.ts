import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorasSoporteComponent } from './horas-soporte.component';

describe('HorasSoporteComponent', () => {
  let component: HorasSoporteComponent;
  let fixture: ComponentFixture<HorasSoporteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorasSoporteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorasSoporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
