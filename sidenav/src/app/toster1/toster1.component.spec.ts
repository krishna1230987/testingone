import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Toster1Component } from './toster1.component';

describe('Toster1Component', () => {
  let component: Toster1Component;
  let fixture: ComponentFixture<Toster1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Toster1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Toster1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
