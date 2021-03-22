import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SparityLibComponent } from './sparity-lib.component';

describe('SparityLibComponent', () => {
  let component: SparityLibComponent;
  let fixture: ComponentFixture<SparityLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SparityLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparityLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
