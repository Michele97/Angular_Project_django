import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContrattiComponent } from './add-contratti.component';

describe('AddContrattiComponent', () => {
  let component: AddContrattiComponent;
  let fixture: ComponentFixture<AddContrattiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddContrattiComponent]
    });
    fixture = TestBed.createComponent(AddContrattiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
