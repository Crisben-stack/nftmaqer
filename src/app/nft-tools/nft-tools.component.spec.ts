import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftToolsComponent } from './nft-tools.component';

describe('NftToolsComponent', () => {
  let component: NftToolsComponent;
  let fixture: ComponentFixture<NftToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NftToolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NftToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
