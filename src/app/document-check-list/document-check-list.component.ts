import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
export interface DcoumentDisplayInfo {
  Id:number;
  DocumentName: String;
  Remarks: String;
  DateSubmitted: String;
  FileUpload:String;
}
const ELEMENT_DATA: DcoumentDisplayInfo[] = [
{Id:1,DocumentName: 'Aldo', Remarks: 'BR300', DateSubmitted: 'AldoMegamall',FileUpload:''},
{Id:2,DocumentName: 'Bench', Remarks: 'BR300', DateSubmitted: 'Bench',FileUpload:''}

];

@Component({
  selector: 'app-document-check-list',
  templateUrl: './document-check-list.component.html',  
  styleUrls: ['./document-check-list.component.css']
})
export class DocumentCheckListComponent implements OnInit {

  displayedColumns: string[] = ['BranchName', 'Remarks', 'DateSubmitted', 'FileUpload'];
  dataSource = ELEMENT_DATA;
  constructor(
    public route: ActivatedRoute,
    public router: Router

  ) { }
  ngOnInit() {
  }

}
