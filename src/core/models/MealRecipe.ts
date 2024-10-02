import { DietPlan } from "./DietPlan";
import { Meal } from "./Meal";

export class MealRecipe {
  id: number=0;
  mealId: number=0;
  meal: Meal=new Meal();
  ingredients: string=""
  instruction: string=""
  preparetiontime: string = '';
  cookingtime: string = '';
}
