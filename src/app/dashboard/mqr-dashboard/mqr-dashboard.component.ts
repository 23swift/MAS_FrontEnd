import { Component, OnInit } from '@angular/core';
import { MqrDashboardService } from './mqr-dashboard.service';
import { IRequestDisplay } from '../../temp/interface/irequest-display';

@Component({
  selector: 'app-mqr-dashboard',
  templateUrl: './mqr-dashboard.component.html',
  styleUrls: ['./mqr-dashboard.component.css'],
  providers: [MqrDashboardService]
})
export class MqrDashboardComponent implements OnInit {
  displayedColumns: string[];
  dataSource: IRequestDisplay[];

  mode: string;
  title: string;
  subTitle: string;
  constructor(private _service: MqrDashboardService) { }

  ngOnInit() {
    this.displayedColumns = this._service.GetTableFields();
    this.dataSource = this._service.Get();

    this.mode = 'create';
    this.title = 'New Affiliation';
    this.subTitle = 'MAU Encoder';
  }
}
