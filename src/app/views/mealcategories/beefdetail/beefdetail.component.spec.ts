import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeefdetailComponent } from './beefdetail.component';

describe('BeefdetailComponent', () => {
  let component: BeefdetailComponent;
  let fixture: ComponentFixture<BeefdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeefdetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeefdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
