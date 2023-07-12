import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowContrattiComponent } from './show-contratti.component';

describe('ShowContrattiComponent', () => {
  let component: ShowContrattiComponent;
  let fixture: ComponentFixture<ShowContrattiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowContrattiComponent]
    });
    fixture = TestBed.createComponent(ShowContrattiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
