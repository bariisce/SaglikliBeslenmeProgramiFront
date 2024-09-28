import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaladdetailComponent } from './saladdetail.component';

describe('SaladdetailComponent', () => {
  let component: SaladdetailComponent;
  let fixture: ComponentFixture<SaladdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaladdetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaladdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
