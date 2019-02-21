import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindupComponent } from './windup.component';

describe('WindupComponent', () => {
  let component: WindupComponent;
  let fixture: ComponentFixture<WindupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
