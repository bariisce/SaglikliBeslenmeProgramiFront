import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDietplanComponent } from './create-dietplan.component';

describe('CreateDietplanComponent', () => {
  let component: CreateDietplanComponent;
  let fixture: ComponentFixture<CreateDietplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateDietplanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateDietplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
