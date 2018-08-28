import { Component, OnInit,Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
export interface BranchDisplayInfo {
    Id:number;
    RequestType: String;
    Customer: String;
    RequestDate: String;


}
const ELEMENT_DATA: BranchDisplayInfo[] = [
 {Id:1,RequestType: 'New Affiliation', Customer: 'Aldo', RequestDate: '06/05/2018'},
 {Id:2,RequestType: 'Bench Affiliation', Customer: 'bench', RequestDate: '06/08/2015'}

];


@Component({
  selector: 'app-ao-checker-dashboard',
  templateUrl: './ao-checker-dashboard.component.html',
  styleUrls: ['./ao-checker-dashboard.component.css']
})
export class AoCheckerDashboardComponent implements OnInit {

  displayedColumns: string[] = ['RequestType', 'Customer', 'RequestDate', 'Operation'];
  dataSource = ELEMENT_DATA;
 
  title:string='New Affliation';
  subTitle:string='AO Checking';
  constructor(
    public route: ActivatedRoute,
    public router: Router

  ) { }

  ngOnInit() {
  }
  private getItem(Id){

    this.router.navigateByUrl('aoChecker/update/'+Id);
  }
}
