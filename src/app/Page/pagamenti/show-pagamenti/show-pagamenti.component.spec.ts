import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPagamentiComponent } from './show-pagamenti.component';

describe('ShowPagamentiComponent', () => {
  let component: ShowPagamentiComponent;
  let fixture: ComponentFixture<ShowPagamentiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowPagamentiComponent]
    });
    fixture = TestBed.createComponent(ShowPagamentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
