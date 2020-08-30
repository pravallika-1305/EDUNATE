import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PocRegisterComponent } from './poc-register.component';

describe('PocRegisterComponent', () => {
  let component: PocRegisterComponent;
  let fixture: ComponentFixture<PocRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PocRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PocRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
