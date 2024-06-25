import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CLIENTESComponent } from './clientes.component';

describe('CLIENTESComponent', () => {
  let component: CLIENTESComponent;
  let fixture: ComponentFixture<CLIENTESComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CLIENTESComponent]
    });
    fixture = TestBed.createComponent(CLIENTESComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
