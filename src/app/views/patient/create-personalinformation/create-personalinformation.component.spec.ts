import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePersonalInformationComponent } from './create-personalinformation.component';

describe('CreatePersonalInformationComponent', () => {
  let component: CreatePersonalInformationComponent;
  let fixture: ComponentFixture<CreatePersonalInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePersonalInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePersonalInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
