import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthrecordsComponent } from './healthrecords.component';

describe('HealthrecordsComponent', () => {
  let component: HealthrecordsComponent;
  let fixture: ComponentFixture<HealthrecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HealthrecordsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthrecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
