import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketTestComponent } from './ticket-test.component';

describe('TicketTestComponent', () => {
  let component: TicketTestComponent;
  let fixture: ComponentFixture<TicketTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicketTestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TicketTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
