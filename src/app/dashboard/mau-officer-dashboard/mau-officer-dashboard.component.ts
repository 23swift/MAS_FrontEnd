import { Component, OnInit } from '@angular/core';
import { MauOfficerDashboardService } from './mau-officer-dashboard.service';
import { IRequestDisplay } from '../../temp/interface/irequest-display';

@Component({
  selector: 'app-mau-officer-dashboard',
  templateUrl: './mau-officer-dashboard.component.html',
  styleUrls: ['./mau-officer-dashboard.component.css'],
  providers: [MauOfficerDashboardService]
})
export class MauOfficerDashboardComponent implements OnInit {
  displayedColumns: string[];
  dataSource: IRequestDisplay[];

  mode: string;
  title: string;
  subTitle: string;
  constructor(private _service: MauOfficerDashboardService) { }

  ngOnInit() {
    this.displayedColumns = this._service.GetTableFields();
    this.dataSource = this._service.Get();

    this.mode = '';
    this.title = '';
    this.subTitle = '';
  }
}
