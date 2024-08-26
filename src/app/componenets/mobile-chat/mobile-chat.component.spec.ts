import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileChatComponent } from './mobile-chat.component';

describe('MobileChatComponent', () => {
  let component: MobileChatComponent;
  let fixture: ComponentFixture<MobileChatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileChatComponent]
    });
    fixture = TestBed.createComponent(MobileChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
