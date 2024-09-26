import { environment } from '../../../environments/environment.development';

export const ApiEndpoints: { [Key: string]: string } = {
  Allergy: environment.api_url + '/allergy',
  Patient: environment.api_url + '/patient',
  Dietitian: environment.api_url + '/dietitian',
  DietPlan: environment.api_url + '/dietplan',
  Admin: environment.api_url + '/admin',
  Meal: environment.api_url + '/meal',
  DietPlanMeal: environment.api_url + '/dietplanmeal',
  DietitianPatient: environment.api_url + '/dietitianpatient',
  HealthRecord: environment.api_url + '/healthrecord',
  MealRecipe: environment.api_url + '/mealrecipe',

};
