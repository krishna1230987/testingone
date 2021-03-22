import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToasterfailComponent } from './toasterfail.component';

describe('ToasterfailComponent', () => {
  let component: ToasterfailComponent;
  let fixture: ComponentFixture<ToasterfailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToasterfailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToasterfailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
