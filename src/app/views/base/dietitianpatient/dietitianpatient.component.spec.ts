import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';

import { ButtonModule, CardModule, GridModule, ListGroupModule, NavModule, UtilitiesModule } from '@coreui/angular';
import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from '../../../icons/icon-subset';
import { DietitianPatientComponent } from './dietitianpatient.component';

describe('DietitianPatientComponent', () => {
  let component: DietitianPatientComponent;
  let fixture: ComponentFixture<DietitianPatientComponent>;
  let iconSetService: IconSetService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardModule, NavModule, GridModule, ListGroupModule, UtilitiesModule, ButtonModule, DietitianPatientComponent, NoopAnimationsModule, ],
      providers: [IconSetService, provideRouter([])],
      teardown: { destroyAfterEach: false }   // <- add this line for Error: NG0205: Injector has already been destroyed.
    })
      .compileComponents();
  });

  beforeEach(() => {
    iconSetService = TestBed.inject(IconSetService);
    iconSetService.icons = { ...iconSubset };

    fixture = TestBed.createComponent(DietitianPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
