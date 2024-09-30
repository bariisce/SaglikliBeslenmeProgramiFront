import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHealthRecordsComponent } from './create-healthrecords.component';

describe('CreateHealthRecordsComponent', () => {
  let component: CreateHealthRecordsComponent;
  let fixture: ComponentFixture<CreateHealthRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateHealthRecordsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateHealthRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
