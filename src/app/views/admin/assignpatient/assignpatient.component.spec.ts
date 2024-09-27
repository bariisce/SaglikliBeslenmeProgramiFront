import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignpatientComponent } from './assignpatient.component';

describe('AssignpatientComponent', () => {
  let component: AssignpatientComponent;
  let fixture: ComponentFixture<AssignpatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignpatientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
