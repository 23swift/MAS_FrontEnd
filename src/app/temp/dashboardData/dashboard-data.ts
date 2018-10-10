import { IRequestDisplay } from '../interface/irequest-display';

export class DashboardData {
    ElementData: IRequestDisplay[] = [
        {
          Id: 1, ReferenceNo: '0000001',
          RequestDate: '06/05/2018', RequestType: 'New Affiliation', 
          BusinessName: 'Bench', DBAName: 'DBA Name Test',
          RequestedBy: 'Juan dela Cruz', Aging: '2',
          Status: 'FOR AO CHECKER REVIEW', TAT: '2'
        },
        {
          Id: 2, ReferenceNo: '0000002',
          RequestDate: '06/05/2018', RequestType: 'New Affiliation', 
          BusinessName: 'Bench', DBAName: 'DBA Name Test',
          RequestedBy: 'Juan dela Cruz', Aging: '1',
          Status: 'FOR AO CHECKER REVIEW', TAT: '1'
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

    Fields = ['ReferenceNo', 'RequestDate', 'RequestType', 'BusinessName',
    'DBAName', 'RequestedBy', 'Aging', 'Status', 'TAT', 'Operation'];

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
