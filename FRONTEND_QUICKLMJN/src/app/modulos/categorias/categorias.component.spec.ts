import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CATEGORIASComponent } from './categorias.component';

describe('CATEGORIASComponent', () => {
  let component: CATEGORIASComponent;
  let fixture: ComponentFixture<CATEGORIASComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CATEGORIASComponent]
    });
    fixture = TestBed.createComponent(CATEGORIASComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
