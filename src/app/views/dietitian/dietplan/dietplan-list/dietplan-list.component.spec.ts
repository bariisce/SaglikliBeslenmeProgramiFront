import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietplanListComponent } from './dietplan-list.component';

describe('DietplanListComponent', () => {
  let component: DietplanListComponent;
  let fixture: ComponentFixture<DietplanListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DietplanListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DietplanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
