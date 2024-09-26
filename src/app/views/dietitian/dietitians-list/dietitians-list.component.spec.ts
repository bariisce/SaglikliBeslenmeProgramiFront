import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietitiansListComponent } from './dietitians-list.component';

describe('DietitiansListComponent', () => {
  let component: DietitiansListComponent;
  let fixture: ComponentFixture<DietitiansListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DietitiansListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DietitiansListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
