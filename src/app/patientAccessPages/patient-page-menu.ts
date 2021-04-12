import { NbMenuItem } from '@nebular/theme';

export const PATIENT_MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: 'dashboardPatient',
    home: true,
    
  },
  {
    title: 'Place an Order',
    icon: 'trending-up-outline',
    link: 'place-order', 
  },
  {
    title: 'My Orders',
    icon: 'activity-outline',
    link: 'my-order',
   
  }
];
