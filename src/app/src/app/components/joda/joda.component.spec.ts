import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JodaComponent } from './joda.component';

describe('JodaComponent', () => {
  let component: JodaComponent;
  let fixture: ComponentFixture<JodaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JodaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JodaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
