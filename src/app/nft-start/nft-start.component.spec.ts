import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftStartComponent } from './nft-start.component';

describe('NftStartComponent', () => {
  let component: NftStartComponent;
  let fixture: ComponentFixture<NftStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NftStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NftStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
