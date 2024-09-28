import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegumeComponent } from './legume.component';

describe('LegumeComponent', () => {
  let component: LegumeComponent;
  let fixture: ComponentFixture<LegumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegumeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
