import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeamealsComponent } from './seameals.component';

describe('SeamealsComponent', () => {
  let component: SeamealsComponent;
  let fixture: ComponentFixture<SeamealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeamealsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeamealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
