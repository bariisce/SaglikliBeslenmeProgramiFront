import { environment } from '../../../environments/environment.development';

export const ApiEndpoints: { [Key: string]: string } = {
  AdminGetAll: environment.api_url + '/Admin/GetAll',
  AdminGetById: environment.api_url + '/Admin/GetById',
  AdminCreate: environment.api_url + '/Admin/Create',
  AdminUpdate: environment.api_url + '/Admin/Update',
  AdminDelete: environment.api_url + '/Admin/Delete',

  AllergyGetAll: environment.api_url + '/Allergy/GetAll',
  AllergyGetById: environment.api_url + '/Allergy/GetById',
  AllergyCreate: environment.api_url + '/Allergy/Create',
  AllergyUpdate: environment.api_url + '/Allergy/Update',
  AllergyDelete: environment.api_url + '/Allergy/Delete',

  PatientGetAll: environment.api_url + '/Patient/GetAll',
  PatientGetById: environment.api_url + '/Patient/GetById',
  PatientCreate: environment.api_url + '/Patient/Create',
  PatientUpdate: environment.api_url + '/Patient/Update',
  PatientDelete: environment.api_url + '/Patient/Delete',

  DietitianGetAll: environment.api_url + '/Dietitian/GetAll',
  DietitianGetById: environment.api_url + '/Dietitian/GetById',
  DietitianCreate: environment.api_url + '/Dietitian/Create',
  DietitianUpdate: environment.api_url + '/Dietitian/Update',
  DietitianDelete: environment.api_url + '/Dietitian/Delete',

  DietitianPatientGetAll: environment.api_url + '/DietitianPatient/GetAll',
  DietitianPatientGetById: environment.api_url + '/DietitianPatient/GetById',
  DietitianPatientCreate: environment.api_url + '/DietitianPatient/Create',
  DietitianPatientUpdate: environment.api_url + '/DietitianPatient/Update',
  DietitianPatientDelete: environment.api_url + '/DietitianPatient/Delete',

  PatientAllergyGetAll: environment.api_url + '/PatientAllergy/GetAll',
  PatientAllergyGetById: environment.api_url + '/PatientAllergy/GetById',
  PatientAllergyCreate: environment.api_url + '/PatientAllergy/Create',
  PatientAllergyUpdate: environment.api_url + '/PatientAllergy/Update',
  PatientAllergyDelete: environment.api_url + '/PatientAllergy/Delete',

  MealCategoryGetAll: environment.api_url + '/MealCategory/GetAll',
  MealCategoryGetById: environment.api_url + '/MealCategory/GetById',
  MealCategoryCreate: environment.api_url + '/MealCategory/Create',
  MealCategoryUpdate: environment.api_url + '/MealCategory/Update',
  MealCategoryDelete: environment.api_url + '/MealCategory/Delete',

  MealGetAll: environment.api_url + '/Meal/GetAll',
  MealGetById: environment.api_url + '/Meal/GetById',
  MealCreate: environment.api_url + '/Meal/Create',
  MealUpdate: environment.api_url + '/Meal/Update',
  MealDelete: environment.api_url + '/Meal/Delete',

  MealRecipeGetAll: environment.api_url + '/MealRecipe/GetAll',
  MealRecipeGetById: environment.api_url + '/MealRecipe/GetById',
  MealRecipeCreate: environment.api_url + '/MealRecipe/Create',
  MealRecipeUpdate: environment.api_url + '/MealRecipe/Update',
  MealRecipeDelete: environment.api_url + '/MealRecipe/Delete',

  DietPlanGetAll: environment.api_url + '/DietPlan/GetAll',
  DietPlanGetById: environment.api_url + '/DietPlan/GetById',
  DietPlanCreate: environment.api_url + '/DietPlan/Create',
  DietPlanUpdate: environment.api_url + '/DietPlan/Update',
  DietPlanDelete: environment.api_url + '/DietPlan/Delete',

  DietPlanMealGetAll: environment.api_url + '/DietPlanMeal/GetAll',
  DietPlanMealGetById: environment.api_url + '/DietPlanMeal/GetById',
  DietPlanMealCreate: environment.api_url + '/DietPlanMeal/Create',
  DietPlanMealUpdate: environment.api_url + '/DietPlanMeal/Update',
  DietPlanMealDelete: environment.api_url + '/DietPlanMeal/Delete',

  HealthRecordGetAll: environment.api_url + '/HealthRecord/GetAll',
  HealthRecordGetById: environment.api_url + '/HealthRecord/GetById',
  HealthRecordCreate: environment.api_url + '/HealthRecord/Create',
  HealthRecordUpdate: environment.api_url + '/HealthRecord/Update',
  HealthRecordDelete: environment.api_url + '/HealthRecord/Delete',

  UserGetAll: environment.api_url + '/User/GetAll',
  UserGetById: environment.api_url + '/User/GetById',
  UserCreate: environment.api_url + '/User/Create',
  UserUpdate: environment.api_url + '/User/Update',
  UserDelete: environment.api_url + '/User/Delete',


};
