import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthRecordsComponent } from './healthrecords.component';

describe('HealthRecordsComponent', () => {
  let component: HealthRecordsComponent;
  let fixture: ComponentFixture<HealthRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HealthRecordsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
