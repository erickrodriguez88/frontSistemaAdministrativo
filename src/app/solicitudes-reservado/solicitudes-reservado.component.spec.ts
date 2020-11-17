import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudesReservadoComponent } from './solicitudes-reservado.component';

describe('SolicitudesReservadoComponent', () => {
  let component: SolicitudesReservadoComponent;
  let fixture: ComponentFixture<SolicitudesReservadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudesReservadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudesReservadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
