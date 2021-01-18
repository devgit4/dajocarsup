import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideshowMComponent } from './slideshow-m.component';

describe('SlideshowMComponent', () => {
  let component: SlideshowMComponent;
  let fixture: ComponentFixture<SlideshowMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideshowMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideshowMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
