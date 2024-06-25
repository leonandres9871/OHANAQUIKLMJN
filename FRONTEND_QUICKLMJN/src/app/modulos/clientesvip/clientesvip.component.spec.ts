import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CLIENTESVIPComponent } from './clientesvip.component';

describe('CLIENTESVIPComponent', () => {
  let component: CLIENTESVIPComponent;
  let fixture: ComponentFixture<CLIENTESVIPComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CLIENTESVIPComponent]
    });
    fixture = TestBed.createComponent(CLIENTESVIPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
