import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoupdetailComponent } from './soupdetail.component';

describe('SoupdetailComponent', () => {
  let component: SoupdetailComponent;
  let fixture: ComponentFixture<SoupdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoupdetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoupdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
