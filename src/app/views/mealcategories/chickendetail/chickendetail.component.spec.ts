import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChickendetailComponent } from './chickendetail.component';

describe('ChickendetailComponent', () => {
  let component: ChickendetailComponent;
  let fixture: ComponentFixture<ChickendetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChickendetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChickendetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
