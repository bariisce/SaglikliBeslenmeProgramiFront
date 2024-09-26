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
    children: [
      {
        name: 'Create Patient',
        url: '/create-patient',
        iconComponent: { name: 'cil-user-follow' }
      },
      {
        name: 'Patients List',
        url: '/patient-list',
        iconComponent: { name: 'cil-list' }
      },
      {
        name: 'Update Patient',
        url: '/update-patient',
        iconComponent: { name: 'cil-pencil' }
      },
    ]
  },

  {
    name: 'Dietitian',
    url: '/admin/dietitian',
    linkProps: { fragment: 'headings' },
    iconComponent: { name: 'cil-user' },
    children: [
      {
        name: 'Create Dietitian',
        url: '/create-dietitian',
        iconComponent: { name: 'cil-user-follow' }
      },
      {
        name: 'Dietitians List',
        url: '/dietitians-list',
        iconComponent: { name: 'cil-list' }
      },
      {
        name: 'Update Dietitian',
        url: '/update-dietitian',
        iconComponent: { name: 'cil-pencil' }
      },

    ]
  },
  {
    name: 'Dietitian',
    title: true
  },
  {
    name: 'Diet Plan',
    url: '/dietitiann/dietplan',
    iconComponent: { name: 'cil-notes' },
    children: [
      {
        name: 'Create Diet Plan',
        url: '/create-dietplan',
        iconComponent: { name: 'cil-plus' }
      },
      {
        name: 'Update Diet Plan',
        url: '/update-dietplan',
        iconComponent: { name: 'cil-sync' }
      },
      {
        name: 'Diet Plans List',
        url: '/dietetian/dietplan',
        icon: 'nav-icon-bullet'
      },

    ]
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
    url: '/sea-meals',
    iconComponent: { name: 'cil-clear-all' },
  },
  {
    name: 'Chicken Meals',
    url: '/chicken-meals',
    iconComponent: { name: 'cil-clear-all' },
  },
  {
    name: 'Beef Meals',
    url: '/beef-meals',
    iconComponent: { name: 'cil-clear-all' },
  },
  {
    name: 'Soups',
    url: '/soups',
    iconComponent: { name: 'cil-clear-all' },
  },
  {
    name: 'Salads',
    url: '/salads',
    iconComponent: { name: 'cil-clear-all' },
  },
  {
    name: 'Legumes',
    url: '/legume',
    iconComponent: { name: 'cil-clear-all' },
  },
  {
    name: 'Cereal Meals',
    url: '/cereal-meals',
    iconComponent: { name: 'cil-clear-all' },
  }
];
