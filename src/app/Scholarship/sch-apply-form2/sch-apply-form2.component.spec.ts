import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchApplyForm2Component } from './sch-apply-form2.component';

describe('SchApplyForm2Component', () => {
  let component: SchApplyForm2Component;
  let fixture: ComponentFixture<SchApplyForm2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchApplyForm2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchApplyForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
