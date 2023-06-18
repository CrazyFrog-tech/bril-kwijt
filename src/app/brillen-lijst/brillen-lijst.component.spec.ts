import { ComponentFixture, TestBed } from '@angular/core/testing';

import { brillenLijstComponent } from './brillen-lijst.component';

describe('GevondenBrillenComponent', () => {
  let component: brillenLijstComponent;
  let fixture: ComponentFixture<brillenLijstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [brillenLijstComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(brillenLijstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
