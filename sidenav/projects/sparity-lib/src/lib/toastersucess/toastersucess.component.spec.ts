import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastersucessComponent } from './toastersucess.component';

describe('ToastersucessComponent', () => {
  let component: ToastersucessComponent;
  let fixture: ComponentFixture<ToastersucessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToastersucessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastersucessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
