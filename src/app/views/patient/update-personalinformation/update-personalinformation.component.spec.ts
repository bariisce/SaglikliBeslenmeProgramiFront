import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePersonalInformationComponent } from './update-personalinformation.component';

describe('UpdatePersonalInformationComponent', () => {
  let component: UpdatePersonalInformationComponent;
  let fixture: ComponentFixture<UpdatePersonalInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatePersonalInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatePersonalInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
