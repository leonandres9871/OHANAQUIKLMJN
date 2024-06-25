import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PRODUCTOSComponent } from './productos.component';

describe('PRODUCTOSComponent', () => {
  let component: PRODUCTOSComponent;
  let fixture: ComponentFixture<PRODUCTOSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PRODUCTOSComponent]
    });
    fixture = TestBed.createComponent(PRODUCTOSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
