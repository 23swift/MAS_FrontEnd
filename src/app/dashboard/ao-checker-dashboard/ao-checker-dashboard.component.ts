import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

export interface BranchDisplayInfo {
  Id: number;
  TrackingNo: string;
  RequestType: string;
  BusinessName: string;
  RequestDate: string;
  BranchName: string;
  Location: string;
  RequestStatus: string;
}

const ELEMENT_DATA: BranchDisplayInfo[] = [
  {
    Id: 1, TrackingNo: '0000001',
    RequestType: 'New Affiliation', BusinessName: 'Aldo',
    RequestDate: '06/05/2018', BranchName: 'SM Megamall',
    Location: 'Mandaluyong', RequestStatus: 'FOR AO ENCODING'
  },
  {
    Id: 2, TrackingNo: '0000002',
    RequestType: 'New Affiliation', BusinessName: 'Aldo',
    RequestDate: '06/05/2018', BranchName: 'SM Calamba',
    Location: 'Calamba', RequestStatus: 'FOR AO ENCODING'
  }
];


@Component({
  selector: 'app-ao-checker-dashboard',
  templateUrl: './ao-checker-dashboard.component.html',
  styleUrls: ['./ao-checker-dashboard.component.css']
})
export class AoCheckerDashboardComponent implements OnInit {
  displayedColumns: string[];
  dataSource: BranchDisplayInfo[];

  mode: string = 'create';
  title: string = 'New Affliation';
  subTitle: string = 'AO Checking';

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.displayedColumns = ['TrackingNo', 'RequestType', 'BusinessName',
      'RequestDate', 'BranchName', 'Location', 'RequestStatus', 'Operation'];
    this.dataSource = ELEMENT_DATA;
  }

  private GetItem(Id) {
    this.router.navigateByUrl('naStep/update/' + Id);
  }
}
