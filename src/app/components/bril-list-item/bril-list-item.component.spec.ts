import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrilListItemComponent } from './bril-list-item.component';

describe('BrilListItemComponent', () => {
  let component: BrilListItemComponent;
  let fixture: ComponentFixture<BrilListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrilListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrilListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
