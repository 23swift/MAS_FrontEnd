import { IRequestDisplay } from '../interface/irequest-display';

export class DashboardData {
    ElementData: IRequestDisplay[] = [
        {
          Id: 1, TrackingNo: '0000001',
          RequestType: 'New Affiliation', BusinessName: 'Bench',
          RequestDate: '06/05/2018', BranchName: 'SM Megamall',
          Location: 'Mandaluyong', RequestStatus: 'FOR MDCS CHECKING'
        },
        {
          Id: 2, TrackingNo: '0000002',
          RequestType: 'New Affiliation', BusinessName: 'Bench',
          RequestDate: '06/05/2018', BranchName: 'SM Calamba',
          Location: 'Calamba', RequestStatus: 'FOR MDCS CHECKING'
        }
        // ,
        // {
        //   Id: 3, TrackingNo: '0000003',
        //   RequestType: 'New Affiliation', BusinessName: 'Bench',
        //   RequestDate: '06/05/2018', BranchName: 'SM Sta. Rosa',
        //   Location: 'Sta. Rosa', RequestStatus: 'FOR PROCESSING'
        // },
        // {
        //   Id: 4, TrackingNo: '0000004',
        //   RequestType: 'New Affiliation', BusinessName: 'Aldo',
        //   RequestDate: '06/05/2018', BranchName: 'Walter Calamba',
        //   Location: 'Calamba', RequestStatus: 'FOR PROCESSING'
        // }
      ];

    Fields = ['TrackingNo', 'RequestType', 'BusinessName',
    'RequestDate', 'BranchName', 'Location', 'RequestStatus', 'Operation'];

    PosFields = ['TrackingNo', 'RequesterName', 'RequestType', 'DBAName',
    'RequestDate', 'BranchName', 'Location', 'RequestStatus', 'NatureOfRequest', 'Operation'];

    PosData = [
      {
        Id: 1, TrackingNo: '0000001', RequesterName: 'Juan dela Cruz',
        RequestType: 'New Affiliation', DBAName: 'Bench',
        RequestDate: '06/05/2018', BranchName: 'SM Megamall',
        Location: 'Mandaluyong', RequestStatus: 'FOR POS PROCESSING',
        NatureOfRequest: 'New Installation'
      },
      {
        Id: 2, TrackingNo: '0000002', RequesterName: 'Juan dela Cruz',
        RequestType: 'New Affiliation', DBAName: 'Bench',
        RequestDate: '06/05/2018', BranchName: 'SM Calamba',
        Location: 'Calamba', RequestStatus: 'FOR POS PROCESSING',
        NatureOfRequest: 'New Installation'
      }
    ];
}
