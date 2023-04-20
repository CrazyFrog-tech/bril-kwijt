import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrilAdvertentieComponent } from './bril-advertentie.component';

describe('BrilAdvertentieComponent', () => {
  let component: BrilAdvertentieComponent;
  let fixture: ComponentFixture<BrilAdvertentieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrilAdvertentieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrilAdvertentieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
