import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyAlarmComponent } from './daily-alarm.component';

describe('DailyAlarmComponent', () => {
  let component: DailyAlarmComponent;
  let fixture: ComponentFixture<DailyAlarmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyAlarmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DailyAlarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
