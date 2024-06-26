import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VENTASComponent } from './ventas.component';

describe('VENTASComponent', () => {
  let component: VENTASComponent;
  let fixture: ComponentFixture<VENTASComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VENTASComponent]
    });
    fixture = TestBed.createComponent(VENTASComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
