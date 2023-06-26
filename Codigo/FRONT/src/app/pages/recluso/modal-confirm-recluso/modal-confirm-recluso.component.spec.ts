import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConfirmReclusoComponent } from './modal-confirm-recluso.component';

describe('ModalConfirmReclusoComponent', () => {
  let component: ModalConfirmReclusoComponent;
  let fixture: ComponentFixture<ModalConfirmReclusoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalConfirmReclusoComponent]
    });
    fixture = TestBed.createComponent(ModalConfirmReclusoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
