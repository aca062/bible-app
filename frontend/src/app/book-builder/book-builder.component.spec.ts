import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookBuilderComponent } from './book-builder.component';

describe('BookBuilderComponent', () => {
  let component: BookBuilderComponent;
  let fixture: ComponentFixture<BookBuilderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookBuilderComponent]
    });
    fixture = TestBed.createComponent(BookBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
