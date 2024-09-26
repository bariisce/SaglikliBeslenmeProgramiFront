import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDietitianComponent } from './update-dietitian.component';

describe('UpdateDietitianComponent', () => {
  let component: UpdateDietitianComponent;
  let fixture: ComponentFixture<UpdateDietitianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateDietitianComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateDietitianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
