import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AyerComponent } from './ayer.component';

describe('AyerComponent', () => {
  let component: AyerComponent;
  let fixture: ComponentFixture<AyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AyerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
