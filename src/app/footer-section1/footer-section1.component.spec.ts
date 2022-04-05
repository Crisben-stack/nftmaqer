import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterSection1Component } from './footer-section1.component';

describe('FooterSection1Component', () => {
  let component: FooterSection1Component;
  let fixture: ComponentFixture<FooterSection1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterSection1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterSection1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
