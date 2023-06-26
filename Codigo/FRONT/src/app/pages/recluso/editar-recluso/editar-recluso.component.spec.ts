import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarReclusoComponent } from './editar-recluso.component';

describe('EditarReclusoComponent', () => {
  let component: EditarReclusoComponent;
  let fixture: ComponentFixture<EditarReclusoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarReclusoComponent]
    });
    fixture = TestBed.createComponent(EditarReclusoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
