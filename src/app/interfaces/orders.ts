export interface Orders {
  subscribe(arg0: (res: any) => void): any;
  id?: number;
  orderNo?: string;
  acceptBy?: string;
  acceptedByUserType?: string;
  bags?: string;
  currierAgentName?: string;
  deliveredOn?: string;
  discount?: string;
  exempt?: string;
  feedback?: boolean;
  location?: boolean;
  netAmount?: string;
  nhsNo?: number;
  orderDate?: string;
  orderType?: string;
  patientName?: string;
  paymentMode?: string;
  rating?: string;
  redemptionAmount?: string;
  rejectNotes?: string;
  rejectedBy?: string;
  rejectedByUserType?: string;
  status?: string;
}