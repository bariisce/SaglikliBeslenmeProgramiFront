import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dietplan2Component } from './dietplan2.component';

describe('Dietplan2Component', () => {
  let component: Dietplan2Component;
  let fixture: ComponentFixture<Dietplan2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dietplan2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dietplan2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
