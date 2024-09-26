import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';

import { ButtonModule, CardModule, GridModule, ListGroupModule, NavModule, UtilitiesModule } from '@coreui/angular';
import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from '../../../icons/icon-subset';
import { AllergiesComponent } from './allergies.component';

describe('AllergiesComponent', () => {
  let component: AllergiesComponent;
  let fixture: ComponentFixture<AllergiesComponent>;
  let iconSetService: IconSetService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardModule, NavModule, GridModule, ListGroupModule, UtilitiesModule, ButtonModule, AllergiesComponent, NoopAnimationsModule, ],
      providers: [IconSetService, provideRouter([])],
      teardown: { destroyAfterEach: false }   // <- add this line for Error: NG0205: Injector has already been destroyed.
    })
      .compileComponents();
  });

  beforeEach(() => {
    iconSetService = TestBed.inject(IconSetService);
    iconSetService.icons = { ...iconSubset };

    fixture = TestBed.createComponent(AllergiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
