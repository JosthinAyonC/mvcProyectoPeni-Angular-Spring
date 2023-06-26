import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoReclusoComponent } from './nuevo-recluso.component';

describe('NuevoReclusoComponent', () => {
  let component: NuevoReclusoComponent;
  let fixture: ComponentFixture<NuevoReclusoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevoReclusoComponent]
    });
    fixture = TestBed.createComponent(NuevoReclusoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
