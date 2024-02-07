import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatsScreenComponent } from './chats-screen.component';

describe('ChatsScreenComponent', () => {
  let component: ChatsScreenComponent;
  let fixture: ComponentFixture<ChatsScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatsScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
