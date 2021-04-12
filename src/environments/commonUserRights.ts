export const userRights = {



    userRoles:
        [
            {
                pharmacist: 'Pharmacist',
                patient: 'Patient',
                courier: 'CourierAgent'
            }
        ],

    menuAccess:
        [
            {
                //For Dashboard View Permission
                pharmaDisplayDashboard: 'Dashboard',

                //For OverView Permission
                pharmaDisplayOverview: 'OverView',

                //For Medicine View Permission
                pharmaDisplayMedicine: 'Medicine Master',

                //For Pharmacist View Permission
                pharmaDisplayPharmacy: 'View Pharmacy Employee Master',

                //For Courier View Permission
                pharmaDisplayCourier: 'Courier Driver Master',

                //For Patient View Permission
                pharmaDisplayPatient: 'View Patient Master',

                //For Ratings
                modulePharmaRating: 'View Rating Pharmacist',
                moduleCourierProfile: 'View Rating Courier',

                //create, Edit Profile and Setting 
                pharmaEditProfile: 'Edit Pharmacy Profile',

                //For common profile
                pharmaDisplayProfile: 'View Pharmacy Profile',

                // For View Order Dertails
                pharmaViewOrderDetails: 'View Order Details',

                // For Module Permission
                viewPermission: 'View',
                viewPermissionEdit: 'Edit',
                viewPermissionDownload: 'Download',
                viewPermissionUpload: 'Upload',

                //For Medicine and Pharmacist Master
                mediMasterUpdate: 'Update Medicine',
                pharmaMasterUpload: 'Upload Pharmacy Employee',
                pharmaMasterDownload: 'Download Pharmacy Employee',
                pharmaMasterEdit: 'Edit Pharmacy Employee',


            // ------------------------- For Patient Access Pages ---------------------------------------------

                patientDisplayDashboard: 'Dashboard Patient',
                patientDisplayPlaceOrder: 'Place an Order',
                patientDisplayMyOrder: 'My Order',
                patientDisplayRateOrders:'Rate Your Order',

            // ----------------------------- For Courier Access Pages ----------------------------------------

            courierDisplayDashboard: 'Dashboard Courier',
            courierDisplayOrdProcessing: 'Order Processing',
            courierDisplayOrdDelive: 'Order Delivery',
            courierDisplayRatings:'View Rating Phamacist'
            },
        ],
    //For Edit, Upload, Download,.....
    onEvent:
        [
            {
                uploadButton: true,
                downloadButton: true,
                editButton: true,
                updateButton: true,
                viewOrdersButton: true               
            }
        ],

    menuNames:
        [
            // --------------------------- For Pharmacist Access Pages ------------------------------------------//
            { pharmaDashboardTitle: 'Dashboard', dashboardIcon: 'home-outline', dashboardLink: 'dashboard' },
            { pharmaOverviewTitle: 'Overview', overviewIcon: 'trending-up-outline', overviewLink: 'overview' },
            { pharmaMedicineTitle: 'Medicine Master', medicineIcon: 'activity-outline', medicineLink: 'medicine-master' },
            { pharmaPharmacyTitle: 'Pharmacy Employee Master', pharmacyIcon: 'briefcase-outline', pharmacyLink: 'pharmacy-employee' },
            { pharmaCourierTitle: 'Courier Driver Master', courierIcon: 'car-outline', courierLink: 'courier-driver' },
            { pharmaPatientTitle: 'Patient Master', patientIcon: 'thermometer-outline', patientLink: 'patient-master' },
            { pharmaRatingsTitle: 'View-Ratings', ratingsIcon: 'star-outline', ratingsLink: 'view-ratings' },
            { pharmaEditProfileTitle: 'User Create', ratingsIcon: 'person-add-outline', ratingsLink: 'user-create' },
            { pharmaProfileTitle: 'Profile', profileIcon: 'person-outline', profileLink: 'profile' },

            // ----------------------------- For Patient Access Pages ------------------------------------------//
            { patientDashboardTitle: 'Patient_Dashboard', dashboardIcon: 'home-outline', dashboardLink: 'dashboardPatient' },
            { pharmaPlaceOrdTitle: 'Place an Order', placeOrdIcon: 'trending-up-outline', placeOrdLink: 'place-order' },
            { pharmaMyOrdTitle: 'My Orders', myOrdIcon: 'activity-outline', myOrdLink: 'my-order' },
            { pharmaRateOrdTitle: 'Rate Your Orders', RateOrdIcon: 'gift-outline', RateOrdLink: 'patient-rate-orders' },

             // ----------------------------- For Courier Access Pages ------------------------------------------//
             { courierDashboardTitle: 'Courier_Dashboard', dashboardIcon: 'home-outline', dashboardLink: 'dashboardCourier' },
             { courierOrdProcessTitle: 'Order Processing', OrdProcessIcon: 'trending-up-outline', OrdProcessLink: 'courier-order-processing' },
             { courierOrdDeliveTitle: 'Order Delivery', OrdDeliveIcon: 'activity-outline', OrdDeliveLink: 'courier-order-delivery' },
             { courierRatingsTitle: 'View Courier_Ratings', courRatingsIcon: 'gift-outline', courRatingsLink: 'view-courier-ratings' }


        ],



}



