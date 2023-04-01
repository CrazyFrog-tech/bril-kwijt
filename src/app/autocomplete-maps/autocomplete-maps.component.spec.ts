import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteMapsComponent } from './autocomplete-maps.component';

describe('AutocompleteMapsComponent', () => {
  let component: AutocompleteMapsComponent;
  let fixture: ComponentFixture<AutocompleteMapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AutocompleteMapsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AutocompleteMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
