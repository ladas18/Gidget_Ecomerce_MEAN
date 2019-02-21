import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Under20Component } from './under20.component';

describe('Under20Component', () => {
  let component: Under20Component;
  let fixture: ComponentFixture<Under20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Under20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Under20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
