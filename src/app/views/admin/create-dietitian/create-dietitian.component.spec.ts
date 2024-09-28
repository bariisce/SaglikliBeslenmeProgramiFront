import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDietitianComponent } from './create-dietitian.component';

describe('CreateDietitianComponent', () => {
  let component: CreateDietitianComponent;
  let fixture: ComponentFixture<CreateDietitianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateDietitianComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateDietitianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
