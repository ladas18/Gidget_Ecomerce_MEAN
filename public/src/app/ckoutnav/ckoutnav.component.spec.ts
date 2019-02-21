import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CkoutnavComponent } from './ckoutnav.component';

describe('CkoutnavComponent', () => {
  let component: CkoutnavComponent;
  let fixture: ComponentFixture<CkoutnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CkoutnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CkoutnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
