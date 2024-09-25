import { DietPlan } from "./DietPlan";
import { Meal } from "./Meal";

export class MealRecipe {
  id: number=0;
  dietPlanId: number=0;
  dietPlan: DietPlan=new DietPlan();
  mealId: number=0;
  meal: Meal=new Meal();
  ingredients: string=""
  instruction: string=""
}
