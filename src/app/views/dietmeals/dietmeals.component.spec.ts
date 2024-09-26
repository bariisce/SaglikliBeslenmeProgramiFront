import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietmealsComponent } from './dietmeals.component';

describe('DietmealsComponent', () => {
  let component: DietmealsComponent;
  let fixture: ComponentFixture<DietmealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DietmealsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DietmealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
