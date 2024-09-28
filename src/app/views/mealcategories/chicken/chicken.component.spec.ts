import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChickenComponent } from './chicken.component';

describe('ChickenComponent', () => {
  let component: ChickenComponent;
  let fixture: ComponentFixture<ChickenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChickenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChickenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
