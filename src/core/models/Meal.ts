import { MealCategory } from './MealCategory'
import { DietPlanMeal } from './DietPlanMeal'

export class Meal {
  id: number=0;
  mealName: string='';
  description: string='';
  calory: number=0;
  image: string=''
  categoryId: number=0;
  categories: MealCategory=new MealCategory();
  dietPlanMeals: DietPlanMeal[]=[];
}
