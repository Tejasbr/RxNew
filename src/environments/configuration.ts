'use-strict';

export const enumValues = {


    selectOptions: [
        { id: 1, name: 'Reward Type' },
        { id: 2, name: 'Cashback' },
        { id: 3, name: 'Unclock scratch card' },
    ],

    membershipOptions: [
        { id: 1, name: 'Platinum' },
        { id: 2, name: 'Gold' },
        { id: 3, name: 'Silver' },
    ],

    pointsAccumulationStarts: [
        { id: 1, name: 1 },
        { id: 2, name: 2 },
        { id: 3, name: 5 },
        { id: 4, name: 10 },
    ],
    applicableType: [
        { id: 1, name: 'On Payment' },
        { id: 2, name: 'On Recharge' },
        { id: 3, name: 'On Point Accumulation' }
    ],
    userType: [
        { id: 1, name: 'Pharmacist' },
        { id: 2, name: 'Courier' },
        { id: 3, name: 'Patient' }
    ],
    userType2: [
        { id: 1, name: 'select' },
        { id: 2, name: 'Courier 1' },
        { id: 3, name: 'Courier 2' },
        { id: 3, name: 'Courier 3' }
    ],
    ordersTab: [
        { index: 0, id: 1, name: 'Pending Orders', active: false, count: 0, statusName: 'Pending' },
        { index: 1, id: 2, name: 'Rejected Orders', active: false, count: 0, statusName: 'Rejected' },
        { index: 2, id: 3, name: 'Accepted Orders', active: false, count: 0, statusName: 'Accepted' },
        { index: 3, id: 4, name: 'In Transit Orders', active: false, count: 0, statusName: 'InTransist' },
        { index: 4, id: 5, name: 'Delivered Orders', active: false, count: 0, statusName: 'Delivered' },
        { index: 5, id: 6, name: 'Total Orders', active: true, count: 0, statusName: 'allOrders' },
    ],
    ordersBtn: [
        { id: 1, name: 'Pending Orders', active: false, count: 0, statusName: 'Pending', btnName: 'Assign Pending Orders', colorStatus: 'primary' },
        { id: 2, name: 'Rejected Orders', active: false, count: 0, statusName: 'Rejected', btnName: 'View Rejected Orders', colorStatus: 'danger' },
        { id: 3, name: 'Accepted Orders', active: false, count: 0, statusName: 'Accepted', btnName: 'View Accepted Orders', colorStatus: 'success' },
        { id: 4, name: 'In Transit Orders', active: false, count: 0, statusName: 'InTransist', btnName: 'View Orders in Transit', colorStatus: 'info' },
        { id: 5, name: 'Delivered Orders', active: false, count: 0, statusName: 'Delivered', btnName: 'View Delivered Orders', colorStatus: 'warning' },
    ],
    tableData: [
        { srNo: 1, petientNHSNo: 'Test123', patientName: 'Test Name 1', location: 'Test Location 1', orderNo: 'O5006', orderAmt: 'Exempted', status: 'Pending', orderStatus: 'Regular Orders' },
        { srNo: 2, petientNHSNo: 'Test234', patientName: 'Test Name 2', location: 'Test Location 2', orderNo: 'O4007', orderAmt: '£20', status: 'Rejected', orderStatus: 'Subscription Orders' },
        { srNo: 3, petientNHSNo: 'Test456', patientName: 'Test Name 3', location: 'Test Location 3', orderNo: 'O3008', orderAmt: '£100', status: 'Accepted', orderStatus: 'Regular Orders' },
        { srNo: 4, petientNHSNo: 'Test789', patientName: 'Test Name 4', location: 'Test Location 4', orderNo: 'O2000', orderAmt: '£50', status: 'In Transit', orderStatus: 'Regular Orders' },
        { srNo: 5, petientNHSNo: 'Test012', patientName: 'Test Name 5', location: 'Test Location 5', orderNo: 'O1001', orderAmt: '£35', status: 'Delivered', orderStatus: 'Subscription Orders' },
    ],

    medicineData: [
        { srno: 1, MediName: 'Paracetamol 625 mg (28)', Price: '£20.00', Quantity: 2, NetAmount: '£40.00' },
        { srno: 2, MediName: 'Clindamycin 10 mg (28)', Price: '£30.00', Quantity: 2, NetAmount: '£30.00' },
        { srno: 3, MediName: 'Ranitidine 40 mg (28)', Price: '£80.00', Quantity: 2, NetAmount: '£80.00' }

    ],
    courierDriverMaster:[
        { driverId: 1, fName: 'Luca', emailId: 'luca11@xyz.com', phoneNo: 9955221412, vehicleRegNo: 'BL4330', status:'Active'},
        { driverId: 2, fName: 'Luca', emailId: 'luca11@xyz.com', phoneNo: 9955221412, vehicleRegNo: 'BL4330', status:'Active'},
        { driverId: 3, fName: 'Luca', emailId: 'luca11@xyz.com', phoneNo: 9955221412, vehicleRegNo: 'BL4330', status:'Active'},
        { driverId: 4, fName: 'Luca', emailId: 'luca11@xyz.com', phoneNo: 9955221412, vehicleRegNo: 'BL4330', status:'Active'},
        { driverId: 5, fName: 'Luca', emailId: 'luca11@xyz.com', phoneNo: 9955221412, vehicleRegNo: 'BL4330', status:'Active'},
        { driverId: 6, fName: 'Luca', emailId: 'luca11@xyz.com', phoneNo: 9955221412, vehicleRegNo: 'BL4330', status:'Active'},
        { driverId: 7, fName: 'Luca', emailId: 'luca11@xyz.com', phoneNo: 9955221412, vehicleRegNo: 'BL4330', status:'Active'},
        { driverId: 8, fName: 'Luca', emailId: 'luca11@xyz.com', phoneNo: 9955221412, vehicleRegNo: 'BL4330', status:'Active'},
    ],
    medicineMaster: [
        { id: 1, medicineName: 'med1', strength: '200 mg', packSize: 28, price: '£ 20', type: 'medtype1', manuFacName: 'Name 1', status:'Active' },
        { id: 2, medicineName: 'med1', strength: '200 mg', packSize: 28, price: '£ 20', type: 'medtype1', manuFacName: 'Name 1', status:'Active' },
        { id: 3, medicineName: 'med1', strength: '200 mg', packSize: 28, price: '£ 20', type: 'medtype1', manuFacName: 'Name 1', status:'Active' },
        { id: 4, medicineName: 'med1', strength: '200 mg', packSize: 28, price: '£ 20', type: 'medtype1', manuFacName: 'Name 1', status:'Active' },
        { id: 5, medicineName: 'med1', strength: '200 mg', packSize: 28, price: '£ 20', type: 'medtype1', manuFacName: 'Name 1', status:'Active' },
        { id: 6, medicineName: 'med1', strength: '200 mg', packSize: 28, price: '£ 20', type: 'medtype1', manuFacName: 'Name 1', status:'Active' },
        { id: 7, medicineName: 'med1', strength: '200 mg', packSize: 28, price: '£ 20', type: 'medtype1', manuFacName: 'Name 1', status:'Active' },
    ],
    pharmacyMaster:[
        { empId: 1, fName: 'Luca', lName: 'Cridy', emailId: 'luca11@xyz.com', status: 'Active'},
        { empId: 2, fName: 'Luca', lName: 'Cridy', emailId: 'luca11@xyz.com', status: 'Active'},
        { empId: 3, fName: 'Luca', lName: 'Cridy', emailId: 'luca11@xyz.com', status: 'Active'},
        { empId: 4, fName: 'Luca', lName: 'Cridy', emailId: 'luca11@xyz.com', status: 'Active'},
        { empId: 5, fName: 'Luca', lName: 'Cridy', emailId: 'luca11@xyz.com', status: 'Active'},
        { empId: 6, fName: 'Luca', lName: 'Cridy', emailId: 'luca11@xyz.com', status: 'Active'},
    ],
    viewOrders: [
        { id: 1, nhsNo: 'Test123', patientName: 'Test Name 1', location: 'Test Location 1', orderNo: 'O5006', netAmount: 'Exempted', orderDate: '01/02/2020' },
        { id: 2, nhsNo: 'Test123', patientName: 'Test Name 2', location: 'Test Location 2', orderNo: '04007', netAmount: '£20', orderDate: '09/03/2020' },
        { id: 3, nhsNo: 'Test123', patientName: 'Test Name 3', location: 'Test Location 3', orderNo: 'O3008', netAmount: '£100', orderDate: '18/03/2020' },
        { id: 4, nhsNo: 'Test123', patientName: 'Test Name 4', location: 'Test Location 4', orderNo: 'O2000', netAmount: '£60', orderDate: '25/05/2020' },
        { id: 5, nhsNo: 'Test123', patientName: 'Test Name 5', location: 'Test Location 5', orderNo: 'O1001', netAmount: '£65', orderDate: '27/08/2020' },
        { id: 6, nhsNo: 'Test123', patientName: 'Test Name 6', location: 'Test Location 6', orderNo: 'O6002', netAmount: '£33', orderDate: '11/10/2020' },
        { id: 7, nhsNo: 'Test123', patientName: 'Test Name 7', location: 'Test Location 7', orderNo: 'O7008', netAmount: '£50', orderDate: '21/12/2020' }
    ],
    DeliveredOrder: [
        { srNo: 1, petientNHSNo: 'Test123', patientName: 'Test Name 1', location: 'Test Location 1', orderNo: 'O5006', orderAmt: 'Exempted', AssignCourier: 'Courier 1', NoOfBags: 2, PaymentMode:'Cash', DeliDateTime:'11/08/2020' }
      
    ],
    MedicineTabelDelivered: [
        {srno:1, MediName:'Paracetamol 625 mg (28)' , Price: '£20.00', Quantity:2, NetAmount:'£40.00'},
        {srno:2, MediName:'Clindamycin 10 mg (28)', Price: '£30.00', Quantity:2, NetAmount:'£30.00'},
        {srno:3, MediName:'Ranitidine 40 mg (28)', Price: '£80.00', Quantity:2, NetAmount:'£80.00'}
        
    ]
}