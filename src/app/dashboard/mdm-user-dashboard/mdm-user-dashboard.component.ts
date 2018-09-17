import { Component, OnInit } from '@angular/core';
import { MdmUserDashboardService } from './mdm-user-dashboard.service';
import { IRequestDisplay } from '../../temp/interface/irequest-display';

@Component({
  selector: 'app-mdm-user-dashboard',
  templateUrl: './mdm-user-dashboard.component.html',
  styleUrls: ['./mdm-user-dashboard.component.css'],
  providers: [MdmUserDashboardService]
})
export class MdmUserDashboardComponent implements OnInit {
  displayedColumns: string[];
  dataSource: IRequestDisplay[];

  mode: string;
  title: string;
  subTitle: string;
  constructor(private _service: MdmUserDashboardService) { }

  ngOnInit() {
    this.displayedColumns = this._service.GetTableFields();
    this.dataSource = this._service.Get();

    this.mode = ' ';
    this.title = ' ';
    this.subTitle = ' ';
  }
}
