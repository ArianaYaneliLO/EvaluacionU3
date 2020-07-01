import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnlistarTareasComponent } from './enlistar-tareas.component';

describe('EnlistarTareasComponent', () => {
  let component: EnlistarTareasComponent;
  let fixture: ComponentFixture<EnlistarTareasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnlistarTareasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnlistarTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
