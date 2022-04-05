import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterSection2Component } from './footer-section2.component';

describe('FooterSection2Component', () => {
  let component: FooterSection2Component;
  let fixture: ComponentFixture<FooterSection2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterSection2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterSection2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
