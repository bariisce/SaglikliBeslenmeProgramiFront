import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsListComponent } from './patients-list.component';

describe('PatientsListComponent', () => {
  let component: PatientsListComponent;
  let fixture: ComponentFixture<PatientsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
