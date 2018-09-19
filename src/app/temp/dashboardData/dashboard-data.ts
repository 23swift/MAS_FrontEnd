import { IRequestDisplay } from '../interface/irequest-display';

export class DashboardData {
    ElementData: IRequestDisplay[] = [
        {
          Id: 1, TrackingNo: '0000001',
          RequestType: 'New Affiliation', BusinessName: 'Bench',
          RequestDate: '06/05/2018', BranchName: 'SM Megamall',
          Location: 'Mandaluyong', RequestStatus: 'DECLINED'
        },
        {
          Id: 2, TrackingNo: '0000002',
          RequestType: 'New Affiliation', BusinessName: 'Bench',
          RequestDate: '06/05/2018', BranchName: 'SM Calamba',
<<<<<<< HEAD
          Location: 'Calamba', RequestStatus: 'DECLINED'
=======
          Location: 'Calamba', RequestStatus: 'APPROVED'
>>>>>>> d7ceb14e3e04c1ef8ce4d02bf8cabc6334e5f706
        },
        {
          Id: 3, TrackingNo: '0000003',
          RequestType: 'New Affiliation', BusinessName: 'Bench',
          RequestDate: '06/05/2018', BranchName: 'SM Sta. Rosa',
<<<<<<< HEAD
          Location: 'Sta. Rosa', RequestStatus: 'DECLINED'
=======
          Location: 'Sta. Rosa', RequestStatus: 'FOR CADENCIE PROCESSING'
        },
        {
          Id: 4, TrackingNo: '0000004',
          RequestType: 'New Affiliation', BusinessName: 'Aldo',
          RequestDate: '06/05/2018', BranchName: 'Walter Calamba',
          Location: 'Calamba', RequestStatus: 'FOR CADENCIE PROCESSING'
>>>>>>> d7ceb14e3e04c1ef8ce4d02bf8cabc6334e5f706
        }
      ];

    Fields: string[] = ['TrackingNo', 'RequestType', 'BusinessName',
    'RequestDate', 'BranchName', 'Location', 'RequestStatus', 'Operation'];
}
