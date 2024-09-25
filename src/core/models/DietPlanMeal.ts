import { DietPlan } from "./DietPlan";
import { Meal } from "./Meal";

export class DietPlanMeal {
  id: number=0;
  dietPlanId: number = 0;
  dietPlan: DietPlan = new DietPlan();
  mealId: number = 0;
  meal: Meal = new Meal();
  servingSize: number = 0;
}
