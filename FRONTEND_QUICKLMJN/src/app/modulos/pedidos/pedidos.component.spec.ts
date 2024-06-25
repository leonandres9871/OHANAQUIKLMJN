import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PEDIDOSComponent } from './pedidos.component';

describe('PEDIDOSComponent', () => {
  let component: PEDIDOSComponent;
  let fixture: ComponentFixture<PEDIDOSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PEDIDOSComponent]
    });
    fixture = TestBed.createComponent(PEDIDOSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
