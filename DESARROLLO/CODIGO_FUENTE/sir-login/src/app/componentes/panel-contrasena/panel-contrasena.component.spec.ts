import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelContrasenaComponent } from './panel-contrasena.component';

describe('PanelContrasenaComponent', () => {
  let component: PanelContrasenaComponent;
  let fixture: ComponentFixture<PanelContrasenaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelContrasenaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelContrasenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
