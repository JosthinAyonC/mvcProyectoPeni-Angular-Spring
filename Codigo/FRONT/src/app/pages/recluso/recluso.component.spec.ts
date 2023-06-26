import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclusoComponent } from './recluso.component';

describe('ReclusoComponent', () => {
  let component: ReclusoComponent;
  let fixture: ComponentFixture<ReclusoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReclusoComponent]
    });
    fixture = TestBed.createComponent(ReclusoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
