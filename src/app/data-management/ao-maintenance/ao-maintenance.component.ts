import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

export interface AODisplayInfo {
  UserId: string;
  Name: string;
  ContactNumber: string;
  BusinessUnit: string;
  Segment: string;
  BuHeadTag: boolean;
}
const ELEMENT_DATA: AODisplayInfo[] = [
  {UserId: 'A025001391',Name: 'Juanico Sistoso Cabanit', ContactNumber: '4606060', BusinessUnit: 'Alternative Channels Unit', Segment: 'Angeles/Tarlac', BuHeadTag: true },
  {UserId: 'A025008799',Name: 'Janice Torres Angeles', ContactNumber: '8888', BusinessUnit: 'MM1 - South Metro Manila Unit', Segment: 'Manila Area', BuHeadTag: false }
 ];

@Component({
  selector: 'app-ao-maintenance',
  templateUrl: './ao-maintenance.component.html',
  styleUrls: ['./ao-maintenance.component.css']
})
export class AoMaintenanceComponent implements OnInit {
  displayedColumns: string[] = ['UserId', 'Name', 'ContactNumber', 'BusinessUnit', 'Segment', 'BuHeadTag', 'Action'];
  dataSource = ELEMENT_DATA; 
 
  mode:string;
  @Input() detailsRoute:string;
  outlet:string;
  constructor(public route: ActivatedRoute, public router: Router) { }

  ngOnInit() {
  }

}
