import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSeatsComponent } from './book-seats.component';

describe('BookSeatsComponent', () => {
  let component: BookSeatsComponent;
  let fixture: ComponentFixture<BookSeatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookSeatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSeatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
