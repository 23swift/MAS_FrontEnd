import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

export interface BUDisplayInfo {
  UserId: string;
  Name: string;
  BusinessUnit: string;
}
const ELEMENT_DATA: BUDisplayInfo[] = [
  {UserId: 'A025001391',Name: 'Juanico Cabanit', BusinessUnit: 'Merchant Affiliation and Maintenance Unit'},
  {UserId: 'A007001870',Name: 'Amor Bisco', BusinessUnit: 'Merchant Acquiring Sales Unit'}
 ];

@Component({
  selector: 'app-bu-maintenance',
  templateUrl: './bu-maintenance.component.html',
  styleUrls: ['./bu-maintenance.component.css']
})
export class BuMaintenanceComponent implements OnInit {
  displayedColumns: string[] = ['UserId', 'Name', 'BusinessUnit', 'Action'];
  dataSource = ELEMENT_DATA;
 
  mode:string;
  @Input() detailsRoute:string;
  outlet:string;
  constructor(public route: ActivatedRoute, public router: Router) { }

  ngOnInit() {
  }

}
