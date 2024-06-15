import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressFromComponentComponent } from './address-from-component.component';

describe('AddressFromComponentComponent', () => {
  let component: AddressFromComponentComponent;
  let fixture: ComponentFixture<AddressFromComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressFromComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressFromComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
