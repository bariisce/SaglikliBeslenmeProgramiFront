import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDietplan2Component } from './update-dietplan2.component';

describe('UpdateDietplan2Component', () => {
  let component: UpdateDietplan2Component;
  let fixture: ComponentFixture<UpdateDietplan2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateDietplan2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateDietplan2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
