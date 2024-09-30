import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDietplan2Component } from './create-dietplan2.component';

describe('CreateDietplan2Component', () => {
  let component: CreateDietplan2Component;
  let fixture: ComponentFixture<CreateDietplan2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateDietplan2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateDietplan2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
