import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowClientiComponent } from './show-clienti.component';

describe('ShowClientiComponent', () => {
  let component: ShowClientiComponent;
  let fixture: ComponentFixture<ShowClientiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowClientiComponent]
    });
    fixture = TestBed.createComponent(ShowClientiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
