import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GevondenBrillenComponent } from './gevonden-brillen.component';

describe('GevondenBrillenComponent', () => {
  let component: GevondenBrillenComponent;
  let fixture: ComponentFixture<GevondenBrillenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GevondenBrillenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GevondenBrillenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
