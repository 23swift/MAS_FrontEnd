import { Component, OnInit } from '@angular/core';
import { MauEncoderDashboardService } from './mau-encoder-dashboard.service';
import { IRequestDisplay } from '../../temp/interface/irequest-display';

@Component({
  selector: 'app-mau-encoder-dashboard',
  templateUrl: './mau-encoder-dashboard.component.html',
  styleUrls: ['./mau-encoder-dashboard.component.css'],
  providers: [MauEncoderDashboardComponent]
})
export class MauEncoderDashboardComponent implements OnInit {
  displayedColumns: string[];
  dataSource: IRequestDisplay[];

  mode: string;
  title: string;
  subTitle: string;
  constructor(private _service: MauEncoderDashboardService) { }

  ngOnInit() {
    this.displayedColumns = this._service.GetTableFields();
    this.dataSource = this._service.Get();

    this.mode = 'create';
    this.title = 'New Affiliation';
    this.subTitle = 'MAU Encoder';
  }
}
