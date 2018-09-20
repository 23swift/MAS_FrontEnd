import { IRequestDisplay } from '../interface/irequest-display';

export class DashboardData {
    ElementData: IRequestDisplay[] = [
        {
          Id: 1, TrackingNo: '0000001',
          RequestType: 'New Affiliation', BusinessName: 'Bench',
          RequestDate: '06/05/2018', BranchName: 'SM Megamall',
          Location: 'Mandaluyong', RequestStatus: 'APPROVED WITH REQUIREMENTS'
        },
        {
          Id: 2, TrackingNo: '0000002',
          RequestType: 'New Affiliation', BusinessName: 'Bench',
          RequestDate: '06/05/2018', BranchName: 'SM Calamba',
          Location: 'Calamba', RequestStatus: 'DECLINED'
        },
        {
          Id: 3, TrackingNo: '0000003',
          RequestType: 'New Affiliation', BusinessName: 'Bench',
          RequestDate: '06/05/2018', BranchName: 'SM Sta. Rosa',
          Location: 'Sta. Rosa', RequestStatus: 'FOR CADENCIE PROCESSING'
        },
        {
          Id: 4, TrackingNo: '0000004',
          RequestType: 'New Affiliation', BusinessName: 'Aldo',
          RequestDate: '06/05/2018', BranchName: 'Walter Calamba',
          Location: 'Calamba', RequestStatus: 'FOR CADENCIE PROCESSING'
        },
        {
          Id: 5, TrackingNo: '0000005',
          RequestType: 'New Affiliation', BusinessName: 'Bench',
          RequestDate: '06/05/2018', BranchName: 'SM Megamall',
          Location: 'Sta. Rosa', RequestStatus: 'DECLINED'
        }
      ];

    Fields: string[] = ['TrackingNo', 'RequestType', 'BusinessName',
    'RequestDate', 'BranchName', 'Location', 'RequestStatus', 'Operation'];
}
