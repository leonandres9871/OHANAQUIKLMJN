import { ComponentFixture, TestBed } from '@angular/core/testing';

import { USUARIOSComponent } from './usuarios.component';

describe('USUARIOSComponent', () => {
  let component: USUARIOSComponent;
  let fixture: ComponentFixture<USUARIOSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [USUARIOSComponent]
    });
    fixture = TestBed.createComponent(USUARIOSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
