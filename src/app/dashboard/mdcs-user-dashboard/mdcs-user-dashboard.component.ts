import { Component, OnInit } from '@angular/core';
import { MdcsUserDashboardService } from './mdcs-user-dashboard.service';
import { IRequestDisplay } from '../../temp/interface/irequest-display';

@Component({
  selector: 'app-mdcs-user-dashboard',
  templateUrl: './mdcs-user-dashboard.component.html',
  styleUrls: ['./mdcs-user-dashboard.component.css'],
  providers: [MdcsUserDashboardService]
})
export class MdcsUserDashboardComponent implements OnInit {
  displayedColumns: string[];
  dataSource: IRequestDisplay[];

  mode: string;
  title: string;
  subTitle: string;
  constructor(private _service: MdcsUserDashboardService) { }

  ngOnInit() {
    this.displayedColumns = this._service.GetTableFields();
    this.dataSource = this._service.Get();

    this.mode = 'create';
    this.title = 'New Affiliation';
    this.subTitle = 'MDCS User';
  }
}
