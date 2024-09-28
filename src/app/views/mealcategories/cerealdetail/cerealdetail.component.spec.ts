import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CerealdetailComponent } from './cerealdetail.component';

describe('CerealdetailComponent', () => {
  let component: CerealdetailComponent;
  let fixture: ComponentFixture<CerealdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CerealdetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CerealdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
