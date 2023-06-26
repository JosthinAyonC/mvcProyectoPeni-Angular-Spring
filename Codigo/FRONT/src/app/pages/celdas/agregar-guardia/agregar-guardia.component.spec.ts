import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarGuardiaComponent } from './agregar-guardia.component';

describe('AgregarGuardiaComponent', () => {
  let component: AgregarGuardiaComponent;
  let fixture: ComponentFixture<AgregarGuardiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarGuardiaComponent]
    });
    fixture = TestBed.createComponent(AgregarGuardiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
