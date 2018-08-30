import { Component, OnInit } from '@angular/core';
import { PsServicingDashboardService } from './ps-servicing-dashboard.service';
import { IRequestDisplay } from '../../temp/interface/irequest-display';

@Component({
  selector: 'app-ps-servicing-dashboard',
  templateUrl: './ps-servicing-dashboard.component.html',
  styleUrls: ['./ps-servicing-dashboard.component.css'],
  providers: [PsServicingDashboardService]
})
export class PsServicingDashboardComponent implements OnInit {
  displayedColumns: string[];
  dataSource: IRequestDisplay[];

  mode: string;
  title: string;
  subTitle: string;
  constructor(private _service: PsServicingDashboardService) { }

  ngOnInit() {
    this.displayedColumns = this._service.GetTableFields();
    this.dataSource = this._service.Get();

    this.mode = 'create';
    this.title = 'New Affiliation';
    this.subTitle = 'PS Servicing';
  }
}
