import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegumedetailComponent } from './legumedetail.component';

describe('LegumedetailComponent', () => {
  let component: LegumedetailComponent;
  let fixture: ComponentFixture<LegumedetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegumedetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegumedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
