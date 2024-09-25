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
    url: '/theme/patient',
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
      {
        name: '',
        url: '/base/carousel',
        icon: 'nav-icon-bullet'
      },
    ]
  },

  {
    name: 'Dietitian',
    url: '/theme/dietitian',
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
      {
        name: '',
        url: '/base/carousel',
        icon: 'nav-icon-bullet'
      },

    ]
  },
  {
    name: 'Dietitian',
    title: true
  },
  {
    name: 'Diet Plan',
    url: '/dietplan',
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
        url: '/base/cards',
        icon: 'nav-icon-bullet'
      },
      {
        name: '',
        url: '/base/carousel',
        icon: 'nav-icon-bullet'
      },

    ]
  },
  {
    name: 'Meal Categories',
    url: '/meal-categories',
    icon: 'cil-clear-all',
    /*children: [
      {
        name: '',
        url: '/buttons/buttons',
        icon: 'nav-icon-bullet'
      },
      {
        name: '',
        url: '/buttons/button-groups',
        icon: 'nav-icon-bullet'
      },
      {
        name: '',
        url: '/buttons/dropdowns',
        icon: 'nav-icon-bullet'
      }
    ]*/
  },
  {
    name: 'Patient',
    url: '/dietitianpatient',
    iconComponent: { name: 'cil-user' },
    children: [
      {
        name: 'Form Control',
        url: '/forms/form-control',
        iconComponent: { name: 'cil-description' }
      },
    ]
  },

  {
    title: true,
    name: 'Patient'
  },
  {
    name: 'Diet Plan',
    url: '/patient-dietplan',
    iconComponent: { name: 'cil-star' },
  },
  {
    name: 'Allergies',
    url: '/patient/allergies',
    iconComponent: { name: 'cil-drop' }
  },
  {
    name: 'Health Records',
    url: '/patient/health-records',
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
    children: [
      {
        name: 'Meals',
        url: '/create-dietplan',
        icon: 'nav-icon-bullet',
        children: [
          {
            name: 'Meal 1', // Her bir yemeğe tıklanıldığında tarif sayfası açılacak
            url: '/meal-1',
            icon: 'nav-icon-bullet'
          },
          {
            name: 'Meal 2',
            url: '/meal-2',
            icon: 'nav-icon-bullet'
          },
          {
            name: 'Meal 3',
            url: '/meal-3',
            icon: 'nav-icon-bullet'
          }
        ]
      },
    ]
  },
  {
    name: 'Chicken Meals',
    url: '/chicken-meals',
    iconComponent: { name: 'cil-clear-all' },
    children: [
      {
        name: 'Meals',
        url: '/create-dietplan',
        icon: 'nav-icon-bullet',
        children: [
          {
            name: 'Meal 1',
            url: '/meal-1', // Her bir yemeğe tıklanıldığında tarif sayfası açılacak
            icon: 'nav-icon-bullet'
          },
          {
            name: 'Meal 2',
            url: '/meal-2',
            icon: 'nav-icon-bullet'
          },
          {
            name: 'Meal 3',
            url: '/meal-3',
            icon: 'nav-icon-bullet'
          }
        ]
      },
    ]
  },
  {
    name: 'Beef Meals',
    url: '/beef-meals',
    iconComponent: { name: 'cil-clear-all' },
    children: [
      {
        name: 'Meals',
        url: '/create-dietplan',
        icon: 'nav-icon-bullet',
        children: [
          {
            name: 'Meal 1',
            url: '/meal-1', // Her bir yemeğe tıklanıldığında tarif sayfası açılacak
            icon: 'nav-icon-bullet'
          },
          {
            name: 'Meal 2',
            url: '/meal-2',
            icon: 'nav-icon-bullet'
          },
          {
            name: 'Meal 3',
            url: '/meal-3',
            icon: 'nav-icon-bullet'
          }
        ]
      },
    ]
  },
  {
    name: 'Soups',
    url: '/soups',
    iconComponent: { name: 'cil-clear-all' },
    children: [
      {
        name: 'Meals',
        url: '/create-dietplan',
        icon: 'nav-icon-bullet',
        children: [
          {
            name: 'Meal 1',
            url: '/meal-1', // Her bir yemeğe tıklanıldığında tarif sayfası açılacak
            icon: 'nav-icon-bullet'
          },
          {
            name: 'Meal 2',
            url: '/meal-2',
            icon: 'nav-icon-bullet'
          },
          {
            name: 'Meal 3',
            url: '/meal-3',
            icon: 'nav-icon-bullet'
          }
        ]
      },
    ]
  },
  {
    name: 'Salads',
    url: '/salads',
    iconComponent: { name: 'cil-clear-all' },
    children: [
      {
        name: 'Meals',
        url: '/create-dietplan',
        icon: 'nav-icon-bullet',
        children: [
          {
            name: 'Meal 1',
            url: '/meal-1', // Her bir yemeğe tıklanıldığında tarif sayfası açılacak
            icon: 'nav-icon-bullet'
          },
          {
            name: 'Meal 2',
            url: '/meal-2',
            icon: 'nav-icon-bullet'
          },
          {
            name: 'Meal 3',
            url: '/meal-3',
            icon: 'nav-icon-bullet'
          }
        ]
      },
    ]
  },
  {
    name: 'Legumes',
    url: '/legume',
    iconComponent: { name: 'cil-clear-all' },
    children: [
      {
        name: 'Meals',
        url: '/create-dietplan',
        icon: 'nav-icon-bullet',
        children: [
          {
            name: 'Meal 1',
            url: '/meal-1', // Her bir yemeğe tıklanıldığında tarif sayfası açılacak
            icon: 'nav-icon-bullet'
          },
          {
            name: 'Meal 2',
            url: '/meal-2',
            icon: 'nav-icon-bullet'
          },
          {
            name: 'Meal 3',
            url: '/meal-3',
            icon: 'nav-icon-bullet'
          }
        ]
      },
    ]
  },
  {
    name: 'Cereal Meals',
    url: '/cereal-meals',
    iconComponent: { name: 'cil-clear-all' },
    children: [
      {
        name: 'Meals',
        url: '/create-dietplan',
        icon: 'nav-icon-bullet',
        children: [
          {
            name: 'Meal 1',
            url: '/meal-1', // Her bir yemeğe tıklanıldığında tarif sayfası açılacak
            icon: 'nav-icon-bullet'
          },
          {
            name: 'Meal 2',
            url: '/meal-2',
            icon: 'nav-icon-bullet'
          },
          {
            name: 'Meal 3',
            url: '/meal-3',
            icon: 'nav-icon-bullet'
          }
        ]
      },
    ]
  }
];
