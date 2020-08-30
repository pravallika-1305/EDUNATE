import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePocComponent } from './update-poc.component';

describe('UpdatePocComponent', () => {
  let component: UpdatePocComponent;
  let fixture: ComponentFixture<UpdatePocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
