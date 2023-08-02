import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventPassComponent } from './event-pass.component';

describe('EventPassComponent', () => {
  let component: EventPassComponent;
  let fixture: ComponentFixture<EventPassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventPassComponent]
    });
    fixture = TestBed.createComponent(EventPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
