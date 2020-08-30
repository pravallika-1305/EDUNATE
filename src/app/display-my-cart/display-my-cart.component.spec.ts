import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayMyCartComponent } from './display-my-cart.component';

describe('DisplayMyCartComponent', () => {
  let component: DisplayMyCartComponent;
  let fixture: ComponentFixture<DisplayMyCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayMyCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayMyCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
