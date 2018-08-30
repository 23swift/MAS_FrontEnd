import { Component, OnInit } from '@angular/core';
import { AoEncoderDashboardService } from './ao-encoder-dashboard.service';
import { IRequestDisplay } from '../../temp/interface/irequest-display';

@Component({
  selector: 'app-ao-encoder-dashboard',
  templateUrl: './ao-encoder-dashboard.component.html',
  styleUrls: ['./ao-encoder-dashboard.component.css'],
  providers: [AoEncoderDashboardService]
})
export class AoEncoderDashboardComponent implements OnInit {
  displayedColumns: string[];
  dataSource: IRequestDisplay[];

  mode: string;
  title: string;
  subTitle: string;
  constructor(private _service: AoEncoderDashboardService) { }

  ngOnInit() {
    this.displayedColumns = this._service.GetTableFields();
    this.dataSource = this._service.Get();

    this.mode = 'create';
    this.title = 'New Affiliation';
    this.subTitle = 'AO Encoder';
  }
}
