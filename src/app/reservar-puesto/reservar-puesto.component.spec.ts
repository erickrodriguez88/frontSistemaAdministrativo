import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservarPuestoComponent } from './reservar-puesto.component';

describe('ReservarPuestoComponent', () => {
  let component: ReservarPuestoComponent;
  let fixture: ComponentFixture<ReservarPuestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservarPuestoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservarPuestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
