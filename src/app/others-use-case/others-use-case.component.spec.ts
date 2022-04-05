import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OthersUseCaseComponent } from './others-use-case.component';

describe('OthersUseCaseComponent', () => {
  let component: OthersUseCaseComponent;
  let fixture: ComponentFixture<OthersUseCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OthersUseCaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OthersUseCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
