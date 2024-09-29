import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Admin'
  },
  {
    name: 'Patient',
    url: '/admin/patient',
    iconComponent: { name: 'cil-user' },
  },

  {
    name: 'Dietitian',
    url: '/admin/dietitian',
    iconComponent: { name: 'cil-user' },
  },
  {
    name: 'Meal Category',
    url: '/admin/mealcategory',
    iconComponent: { name: 'cil-menu' },
  },
  {
    name: 'Meal',
    url: '/admin/meal',
    iconComponent: { name: 'cil-menu' },
  },
  {
    name: 'Dietitian',
    title: true
  },
  {
    name: 'Diet Plan',
    url: '/dietitian/dietplan',
    iconComponent: { name: 'cil-notes' },
  },
  {
    name: 'Patient',
    url: '/dietitian/dietitianpatient',
    iconComponent: { name: 'cil-user' }
  },

  {
    title: true,
    name: 'Patient'
  },
  {
    name: 'Diet Plan',
    url: '/patient/dietplan',
    iconComponent: { name: 'cil-star' },
  },
  {
    name: 'Allergies',
    url: '/patient/allergies',
    iconComponent: { name: 'cil-drop' }
  },
  {
    name: 'Health Records',
    url: 'patient/health-records',
    iconComponent: { name: 'cil-drop' }
  },
  {
    name: 'Personal Information',
    url: '/patient/personal-information',
    iconComponent: { name: 'cil-drop' }
  },
  {
    name: 'Diet Meals',
    url: '/patient/diet-meals',
    iconComponent: { name: 'cil-drop' }
  },
  {
    title: true,
    name: 'Meal Categories',
    class: 'mt-auto'
  },
  {
    name: 'Sea Meals',
    url: 'mealcategories/sea-meals',
    iconComponent: { name: 'cil-clear-all' },
  },
  {
    name: 'Chicken Meals',
    url: 'mealcategories/chicken-meals',
    iconComponent: { name: 'cil-clear-all' },
  },
  {
    name: 'Beef Meals',
    url: 'mealcategories/beef-meals',
    iconComponent: { name: 'cil-clear-all' },
  },
  {
    name: 'Soups',
    url: 'mealcategories/soups',
    iconComponent: { name: 'cil-clear-all' },
  },
  {
    name: 'Salads',
    url: 'mealcategories/salads',
    iconComponent: { name: 'cil-clear-all' },
  },
  {
    name: 'Legumes',
    url: 'mealcategories/legume',
    iconComponent: { name: 'cil-clear-all' },
  },
  {
    name: 'Cereal Meals',
    url: 'mealcategories/cereal-meals',
    iconComponent: { name: 'cil-clear-all' },
  }
];
