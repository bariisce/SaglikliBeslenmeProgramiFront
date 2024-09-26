import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietplansListComponent } from './dietplans-list.component';

describe('DietplansListComponent', () => {
  let component: DietplansListComponent;
  let fixture: ComponentFixture<DietplansListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DietplansListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DietplansListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
