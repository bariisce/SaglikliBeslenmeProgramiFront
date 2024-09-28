import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CerealComponent } from './cereal.component';

describe('CerealComponent', () => {
  let component: CerealComponent;
  let fixture: ComponentFixture<CerealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CerealComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CerealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
