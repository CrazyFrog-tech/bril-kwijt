import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrilgevondenComponent } from './brilgevonden.component';

describe('BrilgevondenComponent', () => {
  let component: BrilgevondenComponent;
  let fixture: ComponentFixture<BrilgevondenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrilgevondenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrilgevondenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
