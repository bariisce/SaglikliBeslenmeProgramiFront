import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDietplanComponent } from './update-dietplan.component';

describe('UpdateDietplanComponent', () => {
  let component: UpdateDietplanComponent;
  let fixture: ComponentFixture<UpdateDietplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateDietplanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateDietplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
