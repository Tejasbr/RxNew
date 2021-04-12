import { NbMenuItem } from '@nebular/theme';
import { tr } from 'date-fns/locale';
import { userRights } from '../../environments/commonUserRights';



export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: 'dashboard',
    home: true,
    hidden:true
  },
  // {
  //   title: 'Order List',
  //   icon: 'list-outline',
  //   link: 'orders-list',
  // },
  {
    title: 'Overview',
    icon: 'trending-up-outline',
    link: 'overview',
    hidden:true
    
  },
  {
    title: 'Medicine Master',
    icon: 'activity-outline',
    link: 'medicine-master',
    hidden:true
  },
  {
    title: 'Pharmacy Employee Master',
    icon: 'briefcase-outline',
    link: 'pharmacy-employee',
    hidden:true
  },
  {
    title: 'Courier Driver Master',
    icon: 'car-outline',
    link: 'courier-driver',
    hidden:true
  },
  {
    title: 'Patient Master',
    icon: 'thermometer-outline',
    link: 'patient-master',
    hidden:true
  },

  {
    title: 'View-Ratings',
    icon: 'star-outline',
    link: 'view-ratings',
    hidden:true
  },
  {
    title: 'User Create',
    icon: 'person-add-outline',
    link: 'user-create',
    hidden:true
  },
  {
    title: 'Profile',
    icon: 'person-outline',
    link: 'profile',
    hidden:true
  },

  // ---------------------------------------------------------- For Patient Access Role -------------------------------------------------------------------------
  {
    title: 'Patient_Dashboard',
    icon: 'home-outline',
    link: 'dashboardPatient',
    home: true,
    hidden:true
  },
  {
    title: 'Place an Order',
    icon: 'shopping-cart-outline',
    link: 'place-order', 
    hidden:true
  },
  {
    title: 'My Orders',
    icon: 'gift-outline',
    link: 'my-order',
    hidden:true
  },
  {
    title: 'Rate Your Orders',
    icon: 'gift-outline',
    link: 'patient-rate-orders',
    hidden:true
  },

  // --------------------------------------------------------------------------- For Courier Access Role ------------------------------------------------------------------
  {
    title: 'Courier_Dashboard',
    icon: 'home-outline',
    link: 'dashboardCourier',
    home: true,
    hidden:true
  },
  {
    title: 'Order Processing',
    icon: 'shopping-cart-outline',
    link: 'courier-order-processing', 
    hidden:true
  },
  {
    title: 'Order Delivery',
    icon: 'gift-outline',
    link: 'courier-order-delivery',
    hidden:true
  },
  {
    title: 'View Courier_Ratings',
    icon: 'gift-outline',
    link: 'patient-rate-orders',
    hidden:true
  },


  // {
  //   title: 'For Patient Access',
   
  //   link: 'patient',
    
  // }
  // {
  //   title: 'Membership',
  //   icon: 'home-outline',
  //   link: 'membership',
  // },
  // {
  //   title: 'Rule Definition',
  //   icon: 'home-outline',
  //   link: 'rule-definition',
  // },
  // {
  //   title: 'Points Dashboard',
  //   icon: 'home-outline',
  //   link: 'points-dashboard',
  // },
  // {
  //   title: 'Rewards Definition',
  //   icon: 'home-outline',
  //   link: 'rewards-definition',
  // },
  // {
  //   title: 'Custome-Auth',
  //   icon: 'lock-outline',
  //   children: [
  //     {
  //       title: 'Login',
  //       link: '/auth/login',
  //     },
  //     // {
  //     //   title: 'Register',
  //     //   link: '/auth/register',
  //     // },
  //     // {
  //     //   title: 'Request Password',
  //     //   link: '/auth/request-password',
  //     // },
  //     // {
  //     //   title: 'Reset Password',
  //     //   link: '/auth/reset-password',
  //     // },
  //   ],
  // },
  // {
  //   title: 'Miscellaneous',
  //   icon: 'shuffle-2-outline',
  //   children: [
  //     {
  //       title: '404',
  //       link: '/pages/miscellaneous/404',
  //     },
  //   ],
  // },
  // {
  //   title: 'Auth',
  //   icon: 'lock-outline',
  //   children: [
  //     {
  //       title: 'Login',
  //       link: '/auth/login',
  //     },
  //     {
  //       title: 'Register',
  //       link: '/auth/register',
  //     },
  //     {
  //       title: 'Request Password',
  //       link: '/auth/request-password',
  //     },
  //     {
  //       title: 'Reset Password',
  //       link: '/auth/reset-password',
  //     },
  //   ],
  // },
];
