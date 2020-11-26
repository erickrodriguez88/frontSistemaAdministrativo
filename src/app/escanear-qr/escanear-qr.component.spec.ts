import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscanearQRComponent } from './escanear-qr.component';

describe('EscanearQRComponent', () => {
  let component: EscanearQRComponent;
  let fixture: ComponentFixture<EscanearQRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscanearQRComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscanearQRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
