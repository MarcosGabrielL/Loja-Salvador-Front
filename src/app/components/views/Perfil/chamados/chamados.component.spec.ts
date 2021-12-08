import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamadosComponent } from './chamados.component';

describe('ChamadosComponent', () => {
  let component: ChamadosComponent;
  let fixture: ComponentFixture<ChamadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChamadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChamadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
