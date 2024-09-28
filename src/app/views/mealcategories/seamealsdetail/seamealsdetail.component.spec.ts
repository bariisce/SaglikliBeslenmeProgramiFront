import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeamealsdetailComponent } from './seamealsdetail.component';

describe('SeamealsdetailComponent', () => {
  let component: SeamealsdetailComponent;
  let fixture: ComponentFixture<SeamealsdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeamealsdetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeamealsdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
