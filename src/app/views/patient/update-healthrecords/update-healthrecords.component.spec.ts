import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHealthRecordsComponent } from './update-healthrecords.component';

describe('UpdateHealthRecordsComponent', () => {
  let component: UpdateHealthRecordsComponent;
  let fixture: ComponentFixture<UpdateHealthRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateHealthRecordsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateHealthRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
